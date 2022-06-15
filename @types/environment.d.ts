declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      MONGODB_NAME: string;
      GOOGLE_OAUTH_ID: string;
      GOOGLE_OAUTH_SECRET: string;
      NEXTAUTH_SECRET: string;
    }
  }
}

export {};
