import { FormEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';
import { Container, Title, Form, Repositories, Error } from './styles';

interface IRepository {
  id: number;
  description: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storagedRepositoies = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storagedRepositoies) {
      return JSON.parse(storagedRepositoies);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddNewRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repositories) {
      setInputError('Digite o nome do autor/repositorio');
      return;
    }

    try {
      const response = await api.get<IRepository>(`/repos/${inputValue}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setInputValue('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <Container>
      <img src={LogoImg} alt="logo-github" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddNewRepository} hasError={!!inputError}>
        <input
          placeholder="Digite aqui o nome do repositório"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository: IRepository) => (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt="user" />
            <div>
              <strong>{repository.owner.login}</strong>
              <p>{repository.description}</p>
            </div>
            <FiArrowRight color="#C9C9D4" size={20} />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
}
