import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const Experiments = ({ auth }) => {
    const [experimentUrl, setExperimentUrl] = useState('');
    useEffect(() => {
        fetch('/experiment-proxy') // Adjust the endpoint to match your Laravel route
            .then(response => response.json())
            .then(data => {
                setExperimentUrl(data.url);
            })
            .catch(error => {
                console.error('Error fetching experiment URL:', error);
            });
    }, []);

    console.log(auth.user);

    return (
        <AuthenticatedLayout user={auth.user}>
    <Head title="Experiments" />

            <motion.div
                initial={{ y: 500 }}
                animate={{
                    y: 0,
                    transition: { duration: 0.5, type: "spring" },
                }}
                exit={{
                    y: -500,
                    transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
                }}
            >
                <div id="frameContainer">
                    {experimentUrl ? (
                        <iframe
                            src={experimentUrl}
                            allowFullScreen
                            title="Unity Experiment"
                            style={{
                                height: '100vh',
                                width: '85vw',
                                overflow: 'auto',
                                border: '1px solid #ccc',
                                padding: '10px',
                                boxSizing: 'border-box',
                                position: 'absolute',
                                bottom: 0,
                                right: 0
                            }}
                        ></iframe>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Experiments;
