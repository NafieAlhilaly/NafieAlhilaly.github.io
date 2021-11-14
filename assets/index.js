const labels = [
    "Python",
    "Data Analyst",
    "HTML&CSS",
    "JavaScript",
    "FastAPI",
    "Flask"
  ];
const data = {
labels: labels,
datasets: [{
    label: "Skills",
    backgroundColor: ['blueviolet','#afafb3', '#afafb3', '#afafb3', '#afafb3', '#afafb3'],
    data: [75, 60, 39,40, 35, 35]
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            } 
        } 
    } 
};

const barchart = new Chart(
    document.getElementById('myChart'),
    config
  );