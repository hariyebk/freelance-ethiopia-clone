# Freelance Ethiopia Clone

This project aims to create a clone of [Freelance Ethiopia's web app](https://www.freelanceethiopia.com/) with additional features and improvements to enhance the user experience. As a frequent user of their platform for finding jobs, I often encountered various inconveniences related to both the UI and functionality. Instead of simply complaining about these issues or wishing for certain features, I challenged myself to tackle them head-on and find solutions. Through this project, I have successfully addressed the following issues:


## Issues Faced

1. **Inconvenient Login Process**: I found it annoying to repeatedly provide login credentials whenever I left the platform temporarily. It would be more user-friendly to have a persistent user session that remembers me and maintains the session upon returning.

2. **Lack of Job Application Tracking**: I faced difficulties in keeping track of the jobs I had applied for. It would be beneficial to have a simple and easy to navigate space where users can easily monitor and manage their job applications, including the ability to view application statuses and relevant details.

3. **No Feedback on Rejected Applications**: When my job applications were rejected, I received no feedback, making it challenging to understand why my applications were unsuccessful. It would greatly enhance the user experience to provide more detailed and specific feedback on rejected applications, helping users identify areas for improvement.

4. **Complex Job Filtering**: The existing job filtering system allowed users to select multiple sectors simultaneously, but this often made it challenging to query the database effectively. To simplify the filtering process and improve database query efficiency, it would be helpful to implement a more intuitive filtering where only one sector can only be checked at a time.

5. **Lack of Personalized Job Search**: The original platform did not offer a user preferences section where individuals could customize their job search experience. Having the ability to save preferences, such as preferred job categories, locations, or other criteria, would allow users to tailor their job search and receive more relevant recommendations instead of being bombarded with irrelevant job posts.

6. **No Option to Update Password**: The platform did not offer a way for users to update their passwords. This lack of functionality made it inconvenient for users who wanted to change their passwords for security reasons or update it periodically. Providing a password update feature would enhance the overall user experience and security of the platform.


## Challenges Faced

During the development of this project, I encountered the following challenges:

1. **N + 1 Problem when Fetching User Application Data**: When fetching user application data for a specific job post, I faced the N + 1 problem, where the application data had to be fetched for each individual user separately, resulting in unnecessary database queries and decreased performance. I had to implement a Global state mechanism to minimize the N + 1 problem and improve the efficiency of fetching user application data.

2. **Designing a New UI for User Profile**: Redesigning the user profile UI, especially for updating user information, posed a challenge in terms of creating a visually appealing and user-friendly interface. I had to think creatively and consider various design principles to develop an intuitive and responsive UI for the user profile section.

3. **Creating Reusable React Components**: I aimed to make my React components as reusable as possible to enhance code maintainability and reduce redundancy. However, achieving a high level of reusability while accommodating different use cases required careful consideration of component structure and props. I continuously worked on refining my component architecture to strike a balance between reusability and specificity.

4. **Performance-Related Issues**: As the project grew in complexity, I encountered performance-related issues, such as slow rendering times and suboptimal code execution. I had to analyze and Memoize critical components of the code, including implementing efficient hooks, and optimizing database queries to improve the overall performance of the platform.


## What I have gained

1. **Enhanced Technical and Problem-Solving Skills**: Through the process of successfully completing this project, I have significantly strengthened my technical skills, including proficiency in TypeScript, React 18, Tailwind CSS, and Superbase. Additionally, I have honed my problem-solving abilities by overcoming challenges and finding effective solutions.

2. **Motivation to Address other Real-World Problems**: This project has served as a catalyst for my motivation to explore and address other real-world problems.

3. **Increased Confidence**: Successfully completing a complex project like this has boosted my confidence as a developer. The knowledge and experience gained throughout the project have validated my skills and abilities, providing me with the confidence to take on more ambitious projects in the future.

4. **Enhanced Knowledge of Performance Optimization Techniques**: Throughout the development process, I have delved into performance optimization techniques to ensure the application performs optimally. This hands-on experience has expanded my knowledge and understanding of optimizing software to improve efficiency, responsiveness, and overall user experience.


## Future Features

In future iterations of the project, I have planned to include the following features:

- Password reset functionality for easy account recovery
- Company verification steps to enhance trust and credibility
- Payment integration using [chapa](https://chapa.co/)
- Multi-account support for users managing different roles
- In-platform chat feature to facilitate direct communication between employers and job applicants


## Technologies Used

This Clone project utilizes the following technologies:

- Front-end: React 18 and Tailwind CSS

- Backend as a Service (BaaS): Superbase for data storage, authentication, and real-time updates

- Remote State Management: TanStack Query for handling remote states, query validation, and mutations

- UI Components: Shadcn for popovers and carousels

- Social Media Sharing: React-Share for social media shares


## Account Credentials

- **Email** : balcha@example.com
- **password** :  balcha@freelance
- **role**: employer

- **Email** : kiya@example.com
- **password** :  kiya@freelance
- **role**: job seeker


## Installation

You can fork the respository or you can git-clone it into your local machine. Once done, please install all the
dependencies by running

```
$ npm install - To Install dependencies 
$ npm run dev - Launch the app
```
Open your browser and visit http://localhost:5173 to view the app.


## Contribution Guidelines

Contributions to the Freelance Ethiopia Clone project are welcome. If you would like to contribute to the project, please follow these guidelines:

1. Fork the project repository.
2. Create a new branch for your contribution.
3. Commit your changes with clear and descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining the purpose and details of your contribution.

Please ensure that your contributions align with the project goals and adhere to the coding conventions and best practices established in the project.


## Disclaimer

This project is an independent effort and is not affiliated with or endorsed by the official Freelance Ethiopia platform. It is intended for personal and educational purposes only.

## License

This project is licensed under MIT license - see LICENSE.md for more details.

## Contact

For any inquiries or feedback regarding the project, please contact [harunbekri6@gmail.com]. I appreciate your interest and involvement in the project.