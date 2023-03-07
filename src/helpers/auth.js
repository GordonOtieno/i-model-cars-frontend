export default function isUserSigned() {
  const userData = localStorage.getItem('user');
  if (userData) {
    return true;
  }

  return false;
}
