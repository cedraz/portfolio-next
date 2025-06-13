import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string | undefined;
  category: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  category,
  message,
}) => (
  <div>
    <h2>Name: {name}</h2>
    <h2>From: {email}</h2>
    <h2>Category: {category}</h2>
    <h2>Message: {message}</h2>
  </div>
);
