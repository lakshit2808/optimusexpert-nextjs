import Image from 'next/image'
import logo  from '../assets/img/Logo/logo_black.png';
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";


const C1 = ({setCurrentNo, selectedRole, setSelectedRole, progressBar}) => {

    const roles = [
        { id: 'Build a SAAS', title: 'Build a SAAS', description: 'Bring your business idea to reality with custom SaaS solutions from Optimus Expert' },
        { id: 'Build a Generative AI Solution', title: 'Build a Generative AI Solution', description: 'Enhance creativity and innovation with custom Generative AI solutions from Optimus Expert' },
        { id: 'Backtesting and Performance Evaluation', title: 'Backtesting and Performance Evaluation', description: 'Optimize your trading strategies with accurate backtesting and performance evaluation from Optimus Expert' },
        { id: 'Automated Trading Systems', title: 'Automated Trading Systems', description: 'Boost your trading efficiency with custom Automated Trading Systems from Optimus Expert' },
        { id: 'Quantitative Strategy Development', title: 'Quantitative Strategy Development', description: 'Elevate your trading with expert Quantitative Strategy Development from Optimus Expert' },
      ];

  return (
    <div className="flex-grow p-8">
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center p-6 bg-white">
        <div className="w-10 h-11 transform"><Image src={logo} alt='logo'/></div>
      </div>
      <div className="bg-blue-50 p-3 mx-6 rounded-lg mb-6">
        <p className="text-gray-700 text-center text-sm">
          Thanks for your interest in Optimus Expert! Before we get started,
          we did like to ask a few questions to better understand your business needs.
        </p>
      </div>
      <div className='ml-10 mr-10'>
      {progressBar()}
      </div>
      
      
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold mb-4 text-black-100">What would you like to build?</h2>
        
        <form>
          {roles.map((role) => (
            <div key={role.id} className="mb-3">
              <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="role"
                  value={role.id}
                  checked={selectedRole === role.id}
                  onChange={() => setSelectedRole(role.id)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <div>
                  <p className="font-semibold text-gray-500">{role.title}</p>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </label>
            </div>
          ))}
        </form>
        
        <button onClick={() => setCurrentNo(2)} className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  </div>
  )
}

export default C1
