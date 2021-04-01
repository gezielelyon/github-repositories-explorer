import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';
import LogoImg from '../../assets/logo.svg';
import { Container, UserProfile, RepositoryInfo, Issues } from './styles';

interface IRepositoryParamnsProps {
  repository: string;
}

interface IRepositoryProps {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IIssueProps {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export function Repository() {
  const { params } = useRouteMatch<IRepositoryParamnsProps>();
  const [repository, setRepository] = useState<IRepositoryProps | null>(null);
  const [issues, setIssues] = useState<IIssueProps[]>([]);

  useEffect(() => {
    api.get<IRepositoryProps>(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api
      .get<IIssueProps[]>(`/repos/${params.repository}/issues`)
      .then(response => {
        setIssues(response.data);
      });
  }, [params.repository]);

  return (
    <Container>
      <div>
        <img src={LogoImg} alt="github" />
        <Link to="/">
          <FiArrowLeft size={24} color="#A8A8B3" />
          Voltar
        </Link>
      </div>

      {repository && (
        <>
          <UserProfile>
            <img src={repository.owner.avatar_url} alt="user" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </UserProfile>

          <RepositoryInfo>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </RepositoryInfo>
        </>
      )}

      <Issues>
        {issues.map((issue: IIssueProps) => (
          <a key={issue.id} target="_black" href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiArrowRight size={20} color="#737380" />
          </a>
        ))}
      </Issues>
    </Container>
  );
}
