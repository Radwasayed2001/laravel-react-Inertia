import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import Lab from "../../../../public/build/assets/images/NewLab4.png";
import GoogleIcon from "../../../../public/build/assets/images/google.png";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div
            style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${Lab})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    filter: "blur(5px)",
                }}
            ></div>
            <div style={{ position: "relative", zIndex: 1 }}>
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto my-auto">
                                <div className="card">
                                    <div className="card-header border-1 shadow">
                                        <h4 style={{ color: "#447" }}>Register Form</h4>
                                    </div>
                                    <div className="card-body">
            <form onSubmit={submit}>
            <div className="w-100 d-flex justify-content-center">
                                                <button
                                                    id="loginwithgoogle"
                                                    className="mb-3 btn btn-white p-2 loginwithgoogle"
                                                    style={{
                                                        border: "1px solid #ddd",
                                                        width: "100%",
                                                        borderRadius: "10px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}>
                                                    
                                                    <img
                                                        src={GoogleIcon}
                                                        alt=""
                                                        width={"25px"}
                                                        height={"25px"}
                                                        className="me-2"
                                                    />
                                                    Register With Google
                                                </button>
                                            </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </GuestLayout>
    );
}
