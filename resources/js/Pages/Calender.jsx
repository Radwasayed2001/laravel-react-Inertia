// import MotionHoc from "./MotionHoc";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion";

const Calender = ({auth}) => {
  console.log(auth.user);
  return <AuthenticatedLayout user={auth.user}>
    <Head title="Calender" />

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
        <h1>Calender</h1>
      </motion.div>
    </AuthenticatedLayout>;
  // return <AuthenticatedLayout user={auth.user}><h1>Calender</h1></AuthenticatedLayout>;
};


export default Calender;