
function notFound(resource = "Resource"){
    return {message: `${resource} Not Found`};
};

function created(resource = "Resource"){
    return {message: `${ticket} created successfully` };
};

module.exports = { notFound, created }