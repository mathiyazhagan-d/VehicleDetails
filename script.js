//--------------------------title------------------
let title = document.createElement("div");
title.innerHTML = ` <div class="bg-dark">
<p class="text-white text-center display-4 container-fluid p-2 ">VehicleDetails</p>
</div><div class="h4">You can find out the Vehicle name, model name and which country in which data they are available are given below table</div>
<div class="p-5"><table class="table table-hover border table-striped ">
<thead class="bg-dark text-white">
  <tr>
    <th scope="col">S.No</th>
    <th scope="col">Country</th>
    <th scope="col">CreatedOn</th>
    <th scope="col">DateAvailableToPublic</th>
    <th scope="col">NameOfCompany</th>
    <th scope="col">VehicleType</th>
    <th scope="col">WMI</th>
  </tr>
</thead>
<tbody id="content">
</tbody>
</table></div>`;
document.body.append(title);
//--------------------Function----------------
async function bike() {
  let content = document.getElementById("content");
  let num = document.getElementById("val");
  let data = await (await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json`)).json();
  console.log(data.Results.length)
  console.log(data)
  data.Results.forEach((e, index) => {
    content.innerHTML += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${e.Country}</td>
    <td>${e.CreatedOn}</td>
    <td>${e.DateAvailableToPublic}</td>
    <td>${e.Name}</td>
    <td>${e.VehicleType}</td>
    <td>${e.WMI}</td>
  </tr>`;
  });
}
bike();


/*Country:null
CreatedOn:"2022-01-21"
DateAvailableToPublic:"2022-01-21"
Id:21257
Name:"JIANGSU ZHONGXING MOTORCYCLE CO.,LTD."
UpdatedOn:null
VehicleType:"Motorcycle"
WMI:"HJ7"*/
