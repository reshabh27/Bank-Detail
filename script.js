
function findDetails() {
  const inputString = $("#ifsc").val();
  const base_url = "https://ifsc.razorpay.com/";

  $.ajax({
    url: base_url + inputString,
    method: "GET",
    success: async function (data) {
        // console.log(data);
        
            // data = await data.json();
        $("#myTable tr").each(function (i, row) {
            // console.log(row);
          const prop = $(row).find("td:first").text();
          if (data[prop] === "") {
            $(row).find("td:last").text("Not Available");
          } else {
            $(row).find("td:last").text(data[prop]);
          }
        });
      
    },
    error: function () {
      alert("Something went wrong, please try again");
    },
  });
}

function clearDetails() {
  $("#myTable tr").each(function (i, row) {
      $(row).find("td:last").text("Please enter new IFSC code");
  });
}
