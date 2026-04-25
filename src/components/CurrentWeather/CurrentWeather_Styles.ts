import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 20px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CityName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const Temperature = styled.p`
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 20px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;

  span:first-child {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  span:last-child {
    font-weight: 600;
  }
`;