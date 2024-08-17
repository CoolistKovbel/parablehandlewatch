"use server"

// token and session actions
export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  
    if (!session.isLoggedIn) {
      session.isLoggedIn = defaultSession.isLoggedIn;
    }
  
    return session;
  };