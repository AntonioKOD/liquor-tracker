
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'
import Dashboard from '@/app/components/Dashboard'
import { UserButton } from '@clerk/nextjs'

export default function AdminDashboard() {
  if(!checkRole('admin')){
    redirect('/')
  }

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the &apos;admin&apos; role.</p>
      <Dashboard/>
      <UserButton/>
    </>
  )
}