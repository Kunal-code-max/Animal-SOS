document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("animal-health-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // ✅ Prevent HTML form submit

    const data = {
      animalType: document.getElementById("animal-type").value,
      count: document.getElementById("count").value,
      conditions: document.getElementById("condition").value,
      location: document.getElementById("location").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
    };

    try {
      const response = await fetch("http://localhost:8080/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      alert("Report submitted successfully!");
      form.reset();
    } catch (err) {
      alert("Submission failed: " + err.message);
    }
  });
});


//contact form

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.getElementById("contact-form");

  forms.addEventListener("submit", async function (e) {
    e.preventDefault(); //  Prevent HTML form submit
     
    const data = {
      names: document.getElementById("names").value,
      email: document.getElementById("email").value,
      phones: document.getElementById("phones").value,
      message: document.getElementById("message").value,
      };

try{
  const response = await fetch("http://localhost:8080/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      });
       if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      alert("Contact successfully!");
      forms.reset();
    } catch (err) {
      alert("Submission failed: " + err.message);
    }
  });
});




  