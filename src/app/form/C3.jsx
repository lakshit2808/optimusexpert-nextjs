import Image from 'next/image'
import logo  from '../assets/img/Logo/logo_black.png';

const ProjectTypeForm = ({setCurrentNo, selectedType, setSelectedType, progressBar}) => {

  const projectTypes = [
    'New idea or project',
    'Existing project that needs more resources',
    'None of the above, I\'m just looking to learn more about Toptal'
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center p-6 bg-white">
        <div className="w-10 h-11 transform"><Image src={logo} alt='logo'/></div>
      </div>
      <div className='ml-10 mr-10'>
      {progressBar()}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-black-100">
        What type of project are you hiring for?
      </h2>
      
      <form>
        {projectTypes.map((type, index) => (
          <div key={index} className="mb-4">
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-lg font-semibold text-gray-500">{type}</span>
            </label>
          </div>
        ))}
      </form>
      
      <div className="flex justify-between mt-8">
        <button onClick={()=> setCurrentNo(2)} className="px-6 py-2 text-blue-600 font-semibold hover:bg-gray-100 rounded">
          ← Back
        </button>
        <div>
          <button onClick={()=> setCurrentNo(4)} className="px-6 py-2 bg-white text-blue-600 font-semibold rounded border border-blue-600 hover:bg-blue-50 mr-2">
            Skip
          </button>
          <button onClick={()=> setCurrentNo(4)} className="px-6 py-2 bg-gray-200 text-gray-600 font-semibold rounded hover:bg-gray-300">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypeForm;