import React, {useState} from 'react';
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

function Form() {

    const [page, setPage] = useState(0);

    
    const FormTitles = ["Sign Up", "Personal Info", "Other"]

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo />
        } else if (page === 1) {
            return <PersonalInfo />
        } else {
            return <OtherInfo />
        }
    }  
  return (
    <div className='form'>
        <div className='progressbar'></div>
        <div className='form-container'>
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>
                <button
                // eslint-disable-next-line eqeqeq
                disabled={page == 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Prev
                </button>

                <button 
                    // eslint-disable-next-line eqeqeq
                    disabled={page == FormTitles.length - 1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    </div>
  )
}

export default Form