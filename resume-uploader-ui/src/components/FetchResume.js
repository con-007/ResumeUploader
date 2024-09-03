import axios from "axios";
import React, { useState } from "react";

const FetchResume = () => {
    const [resumeId, setResumeId] = useState('');
    const [resumeName, setResumeName] = useState('');
    const [resumeData, setResumeData] = useState(null);

    const fetchById = async () => {
        try {
            const resume = await axios.get(`/api/getResumeById/${resumeId}`);
            console.log('Fetched Resume Details: ', resume);
            setResumeData(resume.data);
        } catch (error) {
            console.error('Error in fetching the resume by ID', error);
            setResumeData(null);
        }
    };

    const fetchByName = async () => {
        try {
            const resumes = await axios.get(`/api/getResumeByName/${encodeURIComponent(resumeName).replace(/%20/g, "+")}`);
            console.log('Fetched Resume Details List: ', resumes);
            setResumeData(resumes.data);
        } catch (error) {
            console.error('Error in fetching the resume by Name', error);
            setResumeData(null);
        }
    };

    return(
        <div>
            <div>
                <input
                    type="text"
                    value={resumeId}
                    onChange={(e) => setResumeId(e.target.value)}
                    placeholder="Enter Resume ID"
                />
                <button onClick={fetchById}>Retrieve Resume Details</button>
            </div>
            <div>
                <input
                    type="text"
                    value={resumeName}
                    onChange={(e) => setResumeName(e.target.value)}
                    placeholder="Enter Name"
                />
                <button onClick={fetchByName}>Retrieve Resume Details</button>
            </div>
            <div align="left" style={{ marginLeft: 50 }}>
                {resumeData === null ? (
                    <p>Nothing to show here yet!</p>
                ) : Array.isArray(resumeData) ? (
                    <>
                        <h3>Resume List:</h3>
                        {resumeData.map((resume, index) => (
                            <div key={index}>
                                <h4>Resume Details:</h4>
                                <p><b>ID:</b> {resume.id}</p>
                                <p><b>Name:</b> {resume.firstName} {resume.lastName}</p>
                                <p><b>Email:</b> {resume.email}</p>
                                <p><b>Current Designation:</b> {resume.currentDesignation}</p>
                                <p><b>Current Job Description:</b> {resume.currentJobDescription}</p>
                                <p><b>Current Company:</b> {resume.currentCompany}</p>
                                <p>------------------------------------------------------------</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <h3>Resume Details:</h3>
                        <p><b>ID</b>: {resumeData.id}</p>
                        <p><b>Name:</b> {resumeData.firstName} {resumeData.lastName}</p>
                        <p><b>Email:</b> {resumeData.email}</p>
                        <p><b>Current Designation:</b> {resumeData.currentDesignation}</p>
                        <p><b>Current Job Description:</b> {resumeData.currentJobDescription}</p>
                        <p><b>Current Company:</b> {resumeData.currentCompany}</p>
                    </>
                )}
            </div>
            
        </div>
    );
};

export default FetchResume;