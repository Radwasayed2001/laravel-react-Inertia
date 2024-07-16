import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Lab from "../../../../public/build/assets/images/NewLab4.png";
import GoogleIcon from "../../../../public/build/assets/images/google.png";
import toast, { Toaster }  from 'react-hot-toast';
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
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
            <div style={{ position: "relative", zIndex: 1}}>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto my-5">
                                <div className="card">
                                    <div className="card-header border-1 shadow">
                                        <h4 style={{ color: "#447" }}>Login Form</h4>
                                    </div>
                                    <div className="card-body">
                                        <form method="POST" onSubmit={submit}>
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
                                                    Login With Google
                                                </button>
                                            </div>
                                            <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
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
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
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
