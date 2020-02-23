import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssueList, FilterContainer } from './styles';

export default class Repository extends Component {
  // Validando Propriedades
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
        statusIssue: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      {
        state: 'all',
        label: 'Selecione um filtro para as issues',
        active: true,
      },
      { state: 'open', label: 'Abertas', active: false },
      { state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    // Realizando duas chamadas a api ao mesmo tempo
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),

      // retorna as issues do repositório que estiverem abertas e só 5 por pagina
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find(f => f.active).state,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  }

  handleChange = async e => {
    await this.setState({ filterIndex: e.target.value });
    this.loadRepoAndIssues();
  };

  loadRepoAndIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 5,
      },
    });

    this.setState({ issues: response.data });
  };

  render() {
    const { repository, loading, issues, filters } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <FilterContainer>
          <select onChange={this.handleChange}>
            {filters.map((filter, index) => (
              <option value={index}>{filter.label}</option>
            ))}
          </select>
        </FilterContainer>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
