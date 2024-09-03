const Resume = require('../models/resume');

exports.uploadResumeDetails = async (request, response) => {
    try {
        const resume = await Resume.create(request.body);
        response.status(200).json({id: resume.id});
    } catch (error) {
        response.status(400).json({error: error.message});
    }
};

exports.getResumebyId = async (request, response) => {
    try {
        const resume = await Resume.findByPk(request.params.id);
        if(resume)
            response.json(resume);
        else
            response.status(404).json({error: `Resume with id ${request.params.id} not found!`});
    } catch (error) {
        response.status(400).json({error: error.message});
    }
};

exports.getResumeByName = async (request, response) => {
    try {
        console.log('Name: ', request.params.name);
        const [firstName, lastName] = request.params.name.split('+');

        if (!firstName || !lastName) {
            return response.status(400).json({ error: "Both first name and last name must be provided" });
        }

        const resumeList = await Resume.findAll({
            where: { firstName, lastName }
        });
        // response.json(resumeList);
        if(resumeList)
            response.status(200).json(resumeList);
        else
            response.status(404).json({error: `Resume with name: ${request.name} not found`});
    } catch (error) {
        response.status(400).json({error: error.message});
    }
};