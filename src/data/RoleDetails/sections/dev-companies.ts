import { randomUUID } from "node:crypto"
import { company } from "../models"

const hope: company = {
  id: randomUUID(), 
  name: "Hope Solution Tecnologia da Informação LTDA",
  role: {en: "Mid-level Full Stack Developer", pt: "Desenvolvedor Fullstack Pleno" },
  startDate: new Date(2024, 5, 1), 
  endDate: new Date(), 
  description: {
    en: `
    Main responsibilities:<br>
    - Maintenance and evolution of a legacy ERP project with over 10 years of dev in ASP.NET MVC and backend API using C# / .NET;<br>
    - Lead developer responsible for maintaining the Mobile App built with React Native + Expo;<br>
    - Responsible for the complete redesign and modernization of the App, adopting modern versions and development standards;<br>
    - Integration with external services for handling payment, WhatsApp, and Digital Signatures.<br>
    `, 
    pt: `
    Principais atividades:<br>
    - Manutenção e evolução de projeto legado (ERP) com mais de 10 anos em ASP.NET MVC;<br>
    - Participação na melhoria e manutenção da API backend em C# / .NET;<br>
    - Principal desenvolvedor na manutenção do App Mobile em React Native + Expo;<br>
    - Responsável pela reformulação completa do App para versões e padrões modernos;<br>
    - Integrações com serviços externos para lidar com boletos, WhatsApp e Assinatura Digital.<br>
    `
  }
}

const dropar: company = {
  id: randomUUID(),
  name: "Dropar Surf Club",
  role: { en: "Junior Full Stack Developer", pt: "Desenvolvedor Fullstack Junior" },
  startDate: new Date(2023, 3, 1),
  endDate: new Date(2024, 3, 1),
  description: {
    en: `
    Main responsibilities:<br>
    - Complete redesign of the company's system (e-commerce and ERP), built from scratch using Next.js and Express.js;<br>
    - Deployment and monitoring on AWS infrastructure using Elastic Beanstalk, EC2, ECR, and S3;<br>
    - Integration with payment gateways;<br>
    - Development environment following Scrum, Git Flow, monitoring, and regression testing practices.
    `,
    pt: `
    Principais atividades:<br>
    - Reformulação do sistema da empresa (e-commerce e ERP) construída do zero utilizando Next.js e Express.js;<br>
    - Deploy e monitoramento em uma infraestrutura na AWS utilizando Elastic Beanstalk, EC2, ECR e S3;<br>
    - Integração com gateways de pagamento.;<br>
    - Ambiente com rotina de Scrum, Git Flow, monitoramento e testes de regressão.
    `
  }
}

const agroVagas: company = {
  id: randomUUID(),
  name: "Agro Vagas",
  role: { en: "Junior Front-end Developer", pt: "Desenvolvedor Front-end Junior" },
  startDate: new Date(2023, 2, 1),
  endDate: new Date(2023, 5, 1),
  description: {en: "", pt: ""}
}

const kenzieAcademy: company = {
  id: randomUUID(),
  name: "Kenzie Academy",
  role: { en: "Programming Teacher and Full Stack Developer", pt: "Instrutor de programação e Desenvolvedor Full Stack" },
  startDate: new Date(2021, 9, 1),
  endDate: new Date(2022, 7, 1),
  description: {en: "", pt: ""}
}

const brmout: company = {
  id: randomUUID(),
  name: "BRmout",
  role: { en: "IT Intern", pt: "Estagiário de TI" },
  startDate: new Date(2019, 5, 1),
  endDate: new Date(2021, 0, 1),
  description: {en: "", pt: ""}
}


export const companies = [hope, dropar, agroVagas, kenzieAcademy, brmout];