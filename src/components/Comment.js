import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhIPBxIWFRMVFhAREhUYFxUWGBYVFhIYFxgVFhMYHSggGB0lGxUWITEhJSktNS8uFx8zODMtNzQtLisBCgoKDg0OGhAQGi0eHSUtMC0tNS0tLSstLS0tKy0tLS0tLS0tLS0tKy03KysrLS0tLS0tLS0tLTctLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUHBv/EADQQAQACAgACBwYFAwUAAAAAAAABAgMRBCEFEhMiMUFxBjJRYZHwgaGxwdEUQuEVIyRSYv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAeEQEBAAICAgMAAAAAAAAAAAAAAQIREiExcSJBgf/aAAwDAQACEQMRAD8A8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbVhqlxwDaKbJxQnx9nPjKeMM63XnHydZjti3Tnzi0VxblctWInbNKcv8FwXkqxw0k8PMO1g4eJjm1z14XHHevG/VnLHRLtxLY9Il/NFJjeOYlRt4sNMAAAAAAAAAAAAAAAAAAAAAAAAAAzCbHSb8kMLFMnUqsC2G1fdlrjzXw25cvv4N+2Ytel/GGuvpla7auWu5jn+UsznikbVMHvajzXOJ6PzY+HrfNGq2tNa+sRuf2+rfK62zqb0gycba8arz+W9R+OvFPwuLiMtOVorHPeo1H0jSrOOuOeU79P5WeH4q9K8o3HnqYnUfGYid6Y3vy16Yz8P2XPe9+bm2951M3EVzVnq89ffh4y5dveZqxgBFAAAAAAAAAAAAAAAAAAAAAAAAZhc4StLT3lJLjtprC6qV0svB0vH+3y/DcfRWtwdqz5fn+ktqcRMebeeIrPi7/CsfKI8WOKZqxHxj9Xp+f2dx9NezGGsz1ZiZmLa3z3Mc4+GnmlYn+orv4w9n9n57T2fpWPHvRHrE7/AHXKax/U815TxHs3lw5ur1qz5btFon8pXujehOG4ad8VaLf+YjVZ8+9Mzu0fLwS9P9KYsXG3x5YmuSk6tE68fWOTkf6nE25WY1gs5VZ9o74rbjHGo8vX0fL28XT47P2+5ieTluNbgAigAAAAAAAAAAAAAAAAAAAAAAADek8+bQBLbu2iZ8PNZiler3VesxavP8WeyvEbxy6Y+mam7eZvE28Yfc+zXtVPC9H2jPzncTSI/utrXVjfnyeedW3W7/1S0xZcmSOw3bWta3uP4XnfFTjHoHS+PF0xj7Tj6V68xudf2/KLPicmHB/U3tw/uU1Ec99a3l+/0dKcHSufH/y8lcdfnO5n0rzn9FO/Z1nqYfdrvn/2tPjb7+SXsnSnxPcxxH3vzU03E5Ovk5IXNuAAAAAAAAAAAAAAAAAAAAAAAAAAAANqW6sp6T8FZvS2p5tSpU182SizwnGcVk7tLREKeWetRN0bk7O8zPwhbbtNdOjkm1KbvaZt4bny9Pg5vEZtRqiXjuK686qoTO55s2rIwAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM75M1tNfBqAzM7nmwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" />
      <Details>
        <Name>
        Anonymous <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;