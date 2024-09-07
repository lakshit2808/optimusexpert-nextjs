import Image from 'next/image'
import logo  from '../assets/img/Logo/logo_black.png';

const CompanySizeForm = ({setCurrentNo, selectedSize, setSelectedSize, progressBar}) => {

  const companySizes = [
    'Less than 10',
    '11 - 50',
    '51 - 200',
    '201 - 1000',
    '1001 - 5000',
    'More than 5000'
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center p-6 bg-white">
        <div className="w-10 h-11 transform"><Image src={logo} alt='logo'/></div>
      </div>
      <div className='ml-10 mr-10'>
      {progressBar()}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center text-black-100">
        How many people are employed at your company?
      </h2>
      
      <form>
        {companySizes.map((size, index) => (
          <div key={index} className="mb-4">
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="companySize"
                value={size}
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-lg font-semibold text-gray-500">{size}</span>
            </label>
          </div>
        ))}
      </form>
      
      <div className="flex justify-between mt-8">
        <button onClick={()=> setCurrentNo(1)} className="px-6 py-2 text-blue-600 font-semibold hover:bg-gray-100 rounded">
          ← Back
        </button>
        <button onClick={()=> setCurrentNo(3)} className="px-6 py-2 bg-gray-200 text-gray-600 font-semibold rounded hover:bg-gray-300">
          Next →
        </button>
      </div>
    </div>
  );
};

export default CompanySizeForm;