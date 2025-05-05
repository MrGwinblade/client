import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';

const { Title, Paragraph } = Typography;

// Стилизованные компоненты
const Main = styled.main`
  
  Width: 80%;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;


const MainSection = styled.section`
  background-color: #fafafa;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const SubMainSection = styled.div`
  padding: 40px 20px;
  background-color: #fafafa;  
  Width: 35%;
  margin-left: 40px;
`;

const VideoContainer = styled.div`
  width: 45%;
  height: 225px;
  margin: 20px auto;
`;

const MiddleSection = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
`;

const Card = styled.div`

  padding: 20px;
  margin: 10px;
  width: 300px;
  display: inline-block;
  vertical-align: top;

`;

const FooterSection = styled.section`
  padding: 20px;
  background-color: #fafafa;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #000;
  color: #fff;
  border: none;
  &:hover {
    background-color: #333;
    color: #black;
    background-color: #d9d9d9;

  }
`;

const Footer = styled.footer`
   border-top: 1px solid #f0f0f0;
   display: flex;
   flex-direction: column;
   min-height: 300px; /* Минимальная высота футера - вся страница */
 `;
 
 const FooterContent = styled.div`
   padding: 20px;
   text-align: center;
 `;
 
 const DarkBlock = styled.div`
   flex: 1; /* Занимает оставшееся пространство */
   background-color: #333; /* Тёмный цвет */
 `;

const MainPage: React.FC = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const opts = {
    height: '225',
    width: '100%',
    playerVars: {
      autoplay: 0, // Отключить автозапуск
    },
  };

  const onReady = () => {
    // Можно добавить логику при готовности плеера
  };

  return (
    <Main>
      <Header>
        <Logo>Some Company</Logo>
        <StyledButton onClick={handleContactClick}>Contact us</StyledButton>
      </Header>

      <MainSection>
      <SubMainSection>
      <Title>Most important title on the page</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis leo et condimentum utrices, sed urna convallis metus, vel suscipit nibh lacus incididunt ante.
        </Paragraph>
      </SubMainSection>
        
      <VideoContainer>
          <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={onReady} />
        </VideoContainer>
      </MainSection>

      <MiddleSection>
        <Title level={2}>Also very important title</Title>
        <Row gutter={[16, 16]} justify="center" style={{ width: '100%', margin: "0 auto" }}>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title level={4}>Title</Title>
              <Paragraph> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Paragraph>
            </Card>
          </Col>  
        </Row>
        <StyledButton onClick={handleContactClick}>Contact us</StyledButton>
      </MiddleSection>

      <FooterSection>
        <Title level={2}>Less important title</Title>
        <StyledButton onClick={handleContactClick}>Contact us</StyledButton>
      </FooterSection>

      <Footer>
        <FooterContent>
          <Paragraph style={{ textAlign: 'center', padding: '20px', fontSize: '24px', fontWeight: 'semibold' }}>
            Some Company 2024
          </Paragraph>
        </FooterContent>
        <DarkBlock />
      </Footer>
    </Main>
  );
};

export default MainPage;