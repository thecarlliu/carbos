import axios from "axios";

export default {
    //Gets information from /api/templates
    getTemplates: function() {
        return axios.get("/api/templates");
    },
    // Gets all threads
    getForum: function() {
        return axios.get("/api/forum");
    },
    // Gets the thread with the given id
    getThread: function(id) {
        return axios.get("/api/forum/thread/" + id);
    },
    // Adds a comment to certain thread
    addComment: function(id, commentData) {
        return axios.post("/api/forum/thread/"+id, commentData);
    },
    // Deletes the comment with the given id from a particular thread
    delete: function(id1, id2) {
        return axios.delete("/api/forum/thread/"+id1+"/comments/"+id2);
    }
};
