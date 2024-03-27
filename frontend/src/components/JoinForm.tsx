import React from "react";

export interface JoinFormProps {
    onSubmit?(e: {email: string; password: string}) : void;
}

export const JoinForm: React.FC<JoinFormProps> = (props) => {
    return (
        <Container>
            <Title>회원가입</Title>
            <From
        </Container>
    )
}