const samplelistings = [
    {
      name: "John Doe",
      profession: "Software Developer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 15000,
      location: "Bangalore, Karnataka",
      country: "India",
    },
    {
      name: "Alice Smith",
      profession: "Graphic Designer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 18000,
      location: "Mumbai, Maharashtra",
      country: "India",
    },
    {
      name: "Emma Johnson",
      profession: "Content Writer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
       price: 10000,
      location: "Delhi, India",
      country: "India",
    },
    {
      name: "Robert Brown",
      profession: "Photographer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
       price: 20000,
      location: "Kolkata, West Bengal",
      country: "India",
    },
    {
      name: "Sophia Davis",
      profession: "Digital Marketer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 17000,
      location: "Chennai, Tamil Nadu",
      country: "India",
    },
    {
      name: "James Wilson",
      profession: "App Developer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 25000,
      location: "Hyderabad, Telangana",
      country: "India",
    },
    {
      name: "Mia Moore",
      profession: "UI/UX Designer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 23000,
      location: "Pune, Maharashtra",
      country: "India",
    },
    {
      name: "Daniel White",
      profession: "Full Stack Developer",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 30000,
      location: "Noida, Uttar Pradesh",
      country: "India",
    },
    {
      name: "Olivia Taylor",
      profession: "SEO Specialist",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 16000,
      location: "Ahmedabad, Gujarat",
      country: "India",
    },
    {
      name: "Liam Martin",
      profession: "Data Analyst",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 28000,
      location: "Gurgaon, Haryana",
      country: "India",
    },
    {
      name: "Amelia Thompson",
      profession: "HR Consultant",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 14000,
      location: "Jaipur, Rajasthan",
      country: "India",
    },
    {
      name: "Noah Clark",
      profession: "AI Researcher",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 35000,
      location: "Lucknow, Uttar Pradesh",
      country: "India",
    },
    {
      name: "Charlotte Wright",
      profession: "Financial Advisor",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 22000,
      location: "Surat, Gujarat",
      country: "India",
    },
    {
      name: "Elijah Walker",
      profession: "Cloud Architect",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 32000,
      location: "Patna, Bihar",
      country: "India",
    },
    {
      name: "Isabella Scott",
      profession: "Social Media Manager",
      image : {
        filename : "imetImage",
        url : "https://images.unsplash.com/photo-1581294958576-36903fe82ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
       },
      price: 12000,
      location: "Bhopal, Madhya Pradesh",
      country: "India",
    },
  ];
  
  module.exports = {data : samplelistings};
  