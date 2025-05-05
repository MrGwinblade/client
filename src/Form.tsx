import React, { useState } from 'react';
   import { Button, Typography, Form as AntForm, Input } from 'antd';
   import styled from 'styled-components';
   import { useForm } from 'react-hook-form';
   import { zodResolver } from '@hookform/resolvers/zod';
   import * as z from 'zod';
   import axios from 'axios';


   const { Title, Paragraph } = Typography;

   // Схема валидации с помощью Zod
   const formSchema = z.object({
     name: z.string().min(1, 'Name Required'),
     email: z.string().min(1, 'Email Required').email('Wrong email  format'),
     message: z.string().min(1, 'Message Required'),
   });  

   type FormData = z.infer<typeof formSchema>;

   // Стилизованные компоненты
   const Header = styled.header`
   padding: 20px;
   background-color: #fff;
   border-bottom: 1px solid #f0f0f0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: sticky; /* Добавляем sticky */
   top: 0; /* Прилипает к верхней части экрана */
   z-index: 1000; /* Убедимся, что header поверх других элементов */
 `;

   const Main = styled.main`
     
     Width: 80%;
     justify-content: center;
     margin: 0 auto;
     
   `;

   const Logo = styled.div`
     font-size: 24px;
     font-weight: bold;
   `;

   const MainSection = styled.section`
     background-color: #fafafa;
     text-align: center;
     padding: 40px 20px;
     min-height: 600px;

     display: flex;
     flex-direction: column;
      justify-content: center;
   `;

   const FormContainer = styled(AntForm)`
     max-width: 400px;

     width: 40%;
     margin: 0 auto;
     background-color: #fff;
     padding: 20px;
     border-radius: 4px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   `;

   const StyledButton = styled(Button)`
     background-color: #000;
     color: #fff;
     border: none;
     &:hover {
       background-color: #333;
       color: #fff;
     }
   `;

   const Footer = styled.footer`
   border-top: 1px solid #f0f0f0;
   display: flex;
   flex-direction: column;
   min-height: 250px;
   margin-top: auto; /* Push footer to the bottom of the flex container */
   position: sticky; /* Sticky footer */
   bottom: 0; /* Stick to the bottom of the viewport */
   z-index: 1000; /* Ensure footer is above other content */
   background-color: #fff; /* Ensure footer has a background */
 `;
 const FooterContent = styled.div`
   padding: 20px;
   text-align: center;
 `;
 
 const DarkBlock = styled.div`
   flex: 1; /* Занимает оставшееся пространство */
   background-color: #333; /* Тёмный цвет */
   
 `;

   const Form: React.FC = () => {
     const [responseMessage, setResponseMessage] = useState<string | null>(null);

     const {
       register,
       handleSubmit,
       formState: { errors },
       setValue,
     } = useForm<FormData>({
       resolver: zodResolver(formSchema),
     });

     const onSubmit = async (data: FormData) => {
       try {
         const response = await axios.post('https://ndjsserv.vercel.app/api/', data);
         setResponseMessage(response.data.message);
         console.log('Response:', response.data);
       } catch (error) {
         console.error('Error submitting form:', error);
         setResponseMessage('Произошла ошибка при отправке формы.');
       }
     };

     // Обработчик для onFinish
     const onFinish = () => {
       // Приведение значений к типу FormData и вызов handleSubmit
       handleSubmit(onSubmit)();
     };

     return (
       <Main>
         <Header>
           <Logo>Some Company</Logo>
           <StyledButton>Contact us</StyledButton>
         </Header>

         <MainSection>
           
           {responseMessage ? (
             <Title level={2}>{responseMessage}</Title>
           ) : (
            <>
              <Title level={1} style={{ fontSize: '72px' }}>Only CTA on the page</Title>
             <FormContainer onFinish={onFinish} layout="vertical">
               <AntForm.Item label="Name" validateStatus={errors.name ? 'error' : ''} help={errors.name?.message}>
                 <Input {...register('name')} placeholder="Name" onChange={(e) => setValue('name', e.target.value)} />
               </AntForm.Item>
               <AntForm.Item label="Email" validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
                 <Input {...register('email')} placeholder="Email" onChange={(e) => setValue('email', e.target.value)} />
               </AntForm.Item>
               <AntForm.Item label="Message" validateStatus={errors.message ? 'error' : ''} help={errors.message?.message}>
                 <Input.TextArea {...register('message')} placeholder="Message" onChange={(e) => setValue('message', e.target.value)} />
               </AntForm.Item>
               <AntForm.Item>
                 <StyledButton htmlType="submit">Submit</StyledButton>
               </AntForm.Item>
             </FormContainer>
             </>
           )}
         </MainSection>


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

   export default Form;