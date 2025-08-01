import React from 'react';

type EmailTemplateProps = {
    fromPage: 'Job Application' | 'Contact Form';
    name: string;
    email: string;
    phone: string;
    message: string;
};

export function EmailTemplate({
    fromPage,
    name,
    email,
    phone,
    message,
}: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h2>{fromPage}</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </div>
    );
}