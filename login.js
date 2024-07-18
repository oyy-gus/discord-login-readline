import readlineSync from "readline-sync";

function getTokenSecure() {
  const token = readlineSync.question("Enter your Discord bot token: ", {
    hideEchoBack: true
  });
  return token.trim();
}

async function login(client) {
  let token = getTokenSecure();

  try {
    await client.login(token);
  } catch (error) {
    console.error("Login failed. Please enter a valid token.");
    process.exit();
  }
}

export { login };
export default login;