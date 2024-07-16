import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  return (
    <div>
      <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    </div>
  )
}
