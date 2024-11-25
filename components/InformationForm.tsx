"use client"

import { Field, Form, Formik } from "formik"
import * as Yup from "yup";
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { RxCrossCircled } from "react-icons/rx";
import FileDropZone from "./FileDropZone";
import { RxCross2 } from "react-icons/rx";
import { FaFileInvoice } from "react-icons/fa";
import { motion } from 'framer-motion';

interface valuesType {
    name: string;
    phone: string;
    birthday:string;
    email:string;
    duty:string;
    gender:string;
    resume:string;
  }
export default function InformationForm() {
    const today = new Date();
    const dutyOptions=["انجام شده","معافیت تحصیلی","در حال انجام","مشمول","معاف  دائم"]
    const genderOptions=["آقا","خانم"]
    
    const handle=(values:valuesType)=>{
        console.log("values",values); 
    }
    return (
        <Formik
            initialValues={{name:"",
                            phone:"",
                            birthday:"",
                            email:"",
                            duty:"",
                            gender:"",
                            resume:""
                        }}
            onSubmit={handle}
            validateOnChange={false} 
            validateOnBlur={false}
            validationSchema={
                Yup.object({
                    name:Yup.string().required("ابتدا نام را وارد کنید"),
                    birthday:Yup.string().required("ابتدا تاریخ تولد را وارد کنید"),
                    phone:Yup.string().matches(/^09[0-9]{9}$/, "شماره تلفن  معتبر نیست").required("ابتدا شماره تلفن را وارد کنید"),
                    email:Yup.string().email("ایمیل معتبر نیست").required("ابتدا ایمیل را وارد کنید"),
                    resume: Yup.string().required("ابتدا رزومه را وارد کنید"),
                })
            }
        >
            {({setFieldValue,errors, values})=>{
                return(
                    <Form className="grid grid-cols-2 w-full rounded-lg py-6 px-8 gap-4 text-gray-500 ">
                        <motion.div
                        initial={{ opacity: 0, translateY: 300 }} 
                        animate={{ opacity: 1, translateY: 0 }} 
                        transition={{
                        delay: 0,
                        duration: 0.5, 
                        ease: "easeOut"
                        }}
                        >
                            <label htmlFor="name" className="relative w-full">
                                <Field
                                id="name"
                                name="name"
                                placeholder=""
                                className={`peer block w-full text-gray-800 rounded-md pt-5 pb-1 px-4 focus:outline-none border-2 focus:border-indigo-700 grow ${errors.name? "border-red-400":"border-gray-200"}`}
                                />
                                <span
                                className={`absolute right-5 text-gray-400 transition-all duration-200 transform peer-focus:top-0 peer-focus:text-sm ${
                                values.name ? 'top-0 text-sm' : 'top-3 text-base'
                                }`}
                                >
                                    {"نام و نام خانوادگی"}
                                </span>
                                {(errors.name)?(
                                    <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled/>
                                        <span>{errors.name}</span>
                                    </div>
                                ):""}
                                
                            </label>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, translateY: 300 }}
                        animate={{ opacity: 1, translateY: 0 }} 
                        transition={{
                        delay: 0.5, 
                        duration: 0.5, 
                        ease: "easeOut"
                        }}
                        >
                            <label htmlFor="phone" className="relative w-full">
                                <Field
                                id="phone"
                                name="phone"
                                placeholder=""
                                className={`peer block w-full text-gray-800 rounded-md pt-5 pb-1 px-4 focus:outline-none border-2 focus:border-indigo-700 grow ${errors.phone? "border-red-400":"border-gray-200"}`}
                                />
                                <span
                                className={`absolute right-5 text-gray-400 transition-all duration-200 transform peer-focus:top-0 peer-focus:text-sm ${
                                values.phone ? 'top-0 text-sm' : 'top-3 text-base'
                                }`}
                                >
                                    {"شماره تلفن"}
                                </span>
                                {(errors.phone)?(
                                    <div className="flex gap-1 mt-1  items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled/>
                                        <span>{errors.phone}</span>
                                    </div>
                                ):""}
                                
                            </label>
                        </motion.div>

                        <motion.div
                        className="relative w-full min-w-9 "
                        initial={{ opacity: 0, translateY: 300 }} 
                        animate={{ opacity: 1, translateY: 0 }} 
                        transition={{
                            delay: 1, 
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        >
                            <div className="relative w-full parent cursor-text border-2 focus-within:border-indigo-700 rounded-md pr-1 bg-white">
                                <label htmlFor="birthday" className="w-full">
                                    <DatePicker
                                    value={values.birthday}
                                    onChange={(date) => {
                                        const isoDate = date?.toDate?.().toISOString();
                                        setFieldValue('birthday', isoDate);
                                    }}
                                    calendar={persian}
                                    maxDate={today}
                                    locale={persian_fa}
                                    id="birthday"
                                    inputClass={`peer child block w-full text-gray-800 pt-5 pb-1 px-3 focus:outline-none  grow placeholder:text-gray-800 ${
                                    errors.birthday ? "border-red-400" : "border-gray-200"
                                    }`}
                                    placeholder="۱۴۰۳/۰۹/۰۳" 
                                    />
                                    <span className={`absolute right-5 text-gray-400 transition-all duration-200 transform top-0 text-sm`}>
                                        {"تاریخ تولد"}
                                    </span>
                                    {errors.birthday ? (
                                        <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                            <RxCrossCircled />
                                            <span>{errors.birthday}</span>
                                        </div>
                                    ) : null}
                                </label>
                            </div>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, translateY: 300 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            delay: 1.5, 
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        >
                            <label htmlFor="email" className="relative w-full">
                                <Field
                                id="email"
                                name="email"
                                placeholder=""
                                className={`peer block w-full text-gray-800 rounded-md pt-5 pb-1 px-4 focus:outline-none border-2 focus:border-indigo-700 grow ${errors.email? "border-red-400":"border-gray-200"}`}
                                />
                                <span
                                className={`absolute right-5 text-gray-400 transition-all duration-200 transform peer-focus:top-0 peer-focus:text-sm ${
                                values.email ? 'top-0 text-sm' : 'top-3 text-base'
                                }`}
                                >
                                    {"ایمیل"}
                                </span>
                                {(errors.email)?(
                                    <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled/>
                                        <span>{errors.email}</span>
                                    </div>
                                ):""}
                                
                            </label>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, translateY: 300 }} 
                        animate={{ opacity: 1, translateY: 0 }} 
                        transition={{
                            delay: 2,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        >
                            <label htmlFor="duty" className="relative w-full  rounded-md">
                                <Field 
                                as="select" 
                                id="duty" 
                                name="duty" placeholder=""
                                className={`peer !bg-white z-10 select-input block w-full text-gray-800 rounded-md pt-5 pb-1 px-4 focus:outline-none border-2 focus:border-indigo-700 grow ${errors.duty? "border-red-400":"border-gray-200"}`}
                                >
                                    <option disabled value="" hidden>
                                        {""}
                                    </option>
                                    {dutyOptions?.map((item,index) => (
                                        <option key={index} value={item} className=" hover:bg-gray-300 transition">
                                            {item}
                                        </option>
                                    ))}
                                </Field>
                                <span
                                className={`absolute right-5 text-gray-400 transition-all duration-200 transform peer-focus:top-0 peer-focus:text-sm ${
                                values.duty ? 'top-0 text-sm' : 'top-3 text-base'
                                }`}
                                >
                                    {"وضعیت نظام وظیفه"}
                                </span>
                                {(errors.duty)?(
                                    <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled/>
                                        <span>{errors.duty}</span>
                                    </div>
                                ):""}
                            </label>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, translateY: 300 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                        delay: 2.5,
                        duration: 0.5,
                        ease: "easeOut"
                        }}
                        >
                            <label htmlFor="gender" className="relative w-full  rounded-md">
                                <Field 
                                as="select" 
                                id="gender" 
                                name="gender" 
                                placeholder=""
                                className={`peer !bg-white select-input block w-full text-gray-800 rounded-md pt-5 pb-1 px-4 focus:outline-none border-2  focus:border-indigo-700 grow ${errors.gender? "border-red-400":"border-gray-200"}`}
                                >
                                    <option disabled value="" hidden>
                                        {""}
                                    </option>
                                    {genderOptions?.map((item,index) => (
                                        <option key={index} value={item} className=" hover:bg-gray-300 transition">
                                            {item}
                                        </option>
                                    ))}
                                </Field>
                                <span
                                className={`absolute right-5 text-gray-400 transition-all duration-200 transform peer-focus:top-0 peer-focus:text-sm ${
                                values.gender ? 'top-0 text-sm' : 'top-3 text-base'
                                }`}
                                >
                                    {"جنسیت"}
                                </span>
                                {(errors.gender)?(
                                    <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled/>
                                        <span>{errors.gender}</span>
                                    </div>
                                ):""}
                            </label>
                        </motion.div>
                            
                        <div className="col-span-full flex flex-col gap-2">
                            <motion.div
                            initial={{ opacity: 0, translateY: 300 }} 
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                delay: 3, 
                                duration: 0.5, 
                                ease: "easeOut"
                            }}
                            >
                                <FileDropZone
                                onFilesSelected={(files) => {
                                    const selectedFile = files[0];
                                    console.log("aaaaa",files);
                                    
                                    setFieldValue('resume', selectedFile.name);
                                }}
                                />
                                {values.resume ? (
                                    <label htmlFor="resume" className="w-full flex justify-between items-center px-3 border border-gray-200 !bg-white mt-3 rounded-md">
                                        <FaFileInvoice className="!bg-white"/>
                                        <Field
                                        id="resume"
                                        name="resume"
                                        placeholder=""
                                        readOnly
                                        className={`text-gray-800  py-3 px-2 grow focus:outline-none bg-white rounded-md z-10`}
                                        />
                                        <RxCross2 onClick={() => setFieldValue('resume', '')} className="hover:text-red-500 transition cursor-pointer"/>
                                    </label>
                                ):errors.resume ? (
                                    <div className="flex gap-1 mt-1 items-center text-red-700 text-xs text-start w-full pr-2 mb-5">
                                        <RxCrossCircled />
                                        <span>{errors.resume}</span>
                                    </div>
                                ) : ""}
                            </motion.div>
                        </div>
                        <div className="col-span-full flex justify-end">
                            <motion.div
                            initial={{ opacity: 0, translateY: 300 }} 
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                delay: 3.5,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            >
                                <button type="submit" className="flex justify-center items-center rounded-md border py-1 w-24 text-white bg-violet-700 hover:bg-violet-800 transition">
                                    {"ثبت رزومه"}
                                </button>
                            </motion.div>
                        </div>
                            
                            

                    </Form>
                )}}
            </Formik>
        )
}




