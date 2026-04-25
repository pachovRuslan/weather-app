import styled from "styled-components";

export const ForecastWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 20px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ForecastTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ForecastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ForecastItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBgSecondary};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

export const ForecastDate = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const ForecastIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const ForecastTemp = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  min-width: 60px;
  text-align: right;
`;

export const ForecastDesc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: capitalize;
  min-width: 120px;
  text-align: right;
`;