import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 500px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: scale(1.03);
  }
`;