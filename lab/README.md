# Session folder

This folder contains the public facing files for the lab `LAB NAME HERE`.

## Deployment/Getting Started/Steps

Each demo in this is in the numbered directories within. You can follow the instructions in each `DEMO.md` file. All the code and resources you'll need are provided.

## Discussions
Use the Discussion page on this repository to ask any questions or continue the learning conversation!

## Responsible AI
Microsoft is committed to helping our customers use our AI products responsibly, sharing our learnings, and building trust-based partnerships through tools like Transparency Notes and Impact Assessments. Many of these resources can be found at https://aka.ms/RAI. Microsoft’s approach to responsible AI is grounded in our AI principles of fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.

Large-scale natural language, image, and speech models - like the ones used in this sample - can potentially behave in ways that are unfair, unreliable, or offensive, in turn causing harms. Please consult the Azure OpenAI service Transparency note to be informed about risks and limitations.

The recommended approach to mitigating these risks is to include a safety system in your architecture that can detect and prevent harmful behavior. Azure AI Content Safety provides an independent layer of protection, able to detect harmful user-generated and AI-generated content in applications and services. Azure AI Content Safety includes text and image APIs that allow you to detect material that is harmful. We also have an interactive Content Safety Studio that allows you to view, explore and try out sample code for detecting harmful content across different modalities. The following quickstart documentation guides you through making requests to the service.

Another aspect to take into account is the overall application performance. With multi-modal and multi-models applications, we consider performance to mean that the system performs as you and your users expect, including not generating harmful outputs. It's important to assess the performance of your overall application using generation quality and risk and safety metrics.

You can evaluate your AI application in your development environment using the prompt flow SDK. Given either a test dataset or a target, your generative AI application generations are quantitatively measured with built-in evaluators or custom evaluators of your choice. To get started with the prompt flow sdk to evaluate your system, you can follow the quickstart guide. Once you execute an evaluation run, you can visualize the results in Azure AI Studio.
