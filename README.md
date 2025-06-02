# 🏥 CareBridge

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</div>

<div align="center">
  <h3>🌟 Modern Healthcare Patient Management System</h3>
  <p>Streamline patient appointments with intelligent scheduling, real-time notifications, and comprehensive administrative tools.</p>
  
  <a href="https://carebridge-three.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20CareBridge-brightgreen?style=for-the-badge" alt="Live Demo" />
  </a>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**CareBridge** is a comprehensive healthcare patient management application designed to revolutionize the way patients and healthcare providers interact. Built with modern web technologies, it provides a seamless experience for appointment scheduling, patient management, and administrative oversight.

### ✨ Why CareBridge?

- **Patient-Centric Design**: Intuitive interface that puts patients first
- **Administrative Efficiency**: Powerful tools for healthcare administrators
- **Real-Time Communication**: Instant SMS notifications for appointment updates
- **Scalable Architecture**: Built to grow with your healthcare practice
- **Multilingual Support**: Full support for English and French languages

---

## 🚀 Features

### 👥 Patient Features

- **🔐 Patient Registration**: Secure sign-up with comprehensive profile creation
- **📅 Smart Appointment Booking**: Schedule appointments with preferred doctors and time slots
- **📄 Document Upload**: Secure file storage for medical documents and records
- **🔔 SMS Notifications**: Real-time appointment confirmations and reminders
- **🌐 Language Selection**: Switch between English and French interfaces

### 🏥 Administrative Features

- **📊 Appointment Dashboard**: Comprehensive view of all scheduled appointments
- **✅ Appointment Confirmation**: Streamlined process for confirming patient appointments
- **📋 Schedule Management**: Flexible scheduling tools for optimal resource allocation
- **❌ Cancellation Management**: Easy appointment cancellation with automatic notifications
- **📈 Performance Analytics**: Monitor application performance with Sentry integration
- **🌍 Multilingual Admin Interface**: Full language support in administrative dashboard

### 🛠️ Technical Features

- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast loading times and smooth interactions
- **🔒 Secure Storage**: Appwrite-powered file storage and database management
- **🎨 Modern UI/UX**: Clean, accessible design with ShadCN components
- **📊 Error Monitoring**: Comprehensive error tracking and performance monitoring
- **🌐 i18n Support**: Built-in internationalization with language context
- **🚀 Real-time Updates**: Dynamic data refresh without page reloads

---

## ⚙️ Tech Stack

### Frontend

- **[Next.js](https://nextjs.org/)** - React framework for production-grade applications
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN/UI](https://ui.shadcn.com/)** - Modern component library
- **[React Context](https://reactjs.org/docs/context.html)** - State management for language preferences

### Backend & Services

- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service platform
- **[Twilio](https://www.twilio.com/)** - SMS notification service
- **[Sentry](https://sentry.io/)** - Error monitoring and performance tracking

### Deployment

- **[Vercel](https://vercel.com/)** - Hosting and deployment platform

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Appwrite account and project setup
- Twilio account for SMS services
- Sentry account for monitoring

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/berrgrayson/carebridge.git
   cd carebridge
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   cp .env.local
   ```

   Configure your environment variables:

   ```env
   PROJECT_ID=
   API_KEY=
   DATABASE_ID=
   PATIENT_COLLECTION_ID=
   DOCTOR_COLLECTION_ID=
   APPOINTMENT_COLLECTION_ID=
   NEXT_PUBLIC_BUCKET_ID=
   NEXT_PUBLIC_ENDPOINT=
   NEXT_PUBLIC_ADMIN_PASSKEY=

   SENTRY_AUTH_TOKEN=
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
carebridge/
├── app/                    # Next.js 13+ app directory
│   ├── admin/             # Admin dashboard pages
│   ├── patients/          # Patient management pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── forms/             # Form components
│   ├── table/             # Data table components
│   └── ui/                # ShadCN UI components
├── constants/             # Application constants
├── lib/                   # Utility functions and configurations
│   ├── actions/           # Server actions
│   ├── appwrite.config.ts # Appwrite configuration
│   ├── utils.ts           # Helper utilities
│   └── validation.ts      # Form validation schemas
├── public/                # Static assets and images
│   └── assets/             # Application assets
├── types/                 # TypeScript type definitions
│   ├── appwrite.types.ts  # Appwrite-specific types
│   └── index.d.ts         # Global type definitions
└── sentry.client.config.js # Sentry configuration
```

---

## 🤝 Contributing

We welcome contributions to CareBridge! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting with Prettier
- Write meaningful commit messages
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to the Appwrite team for their excellent BaaS platform
- ShadCN for the beautiful component library
- The Next.js team for the amazing framework
- All contributors who help improve CareBridge

---

<div align="center">
  <p>Made with ❤️ for better healthcare management</p>
  <p>
    <a href="https://carebridge-three.vercel.app">Live Demo</a> •
    <a href="#-getting-started">Documentation</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>
