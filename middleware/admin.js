export default function ({ $auth, redirect }) {
  if ($auth.user && $auth.user.role !== 'Admin') return redirect('/')
}
