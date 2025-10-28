import sales from "../assets/sales-icon.png";
import total from "../assets/total-sales.png";
import factoring from "../assets/factoring-logo.png";
import dollar from "../assets/dollar-logo.png";
import u1 from "../assets/user1.jpg";
import u2 from "../assets/user2.jpg";
import as from "../assets/average-sale.png";
import u3 from "../assets/user3.jpg";
import u4 from "../assets/user4.jpg";
import secure from "../assets/secure-logo.png";


const Dashboard = () => {
 

  const us = [u1, u2, u3, u4];

  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" },
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sales Overview Card */}
          <div className="bg-[#E0F0E5] py-10 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <img
                src={sales}
                alt="sales-icon"
                className="w-5 sm:w-6 h-5 sm:h-6 mt-1"
              />
              Sales overview from Previous Day
            </h2>

            {/* Sales Stats */}
            <div className="mb-4 bg-white p-4 rounded-lg relative">
              <div className="flex items-center mb-4">
                <p className="text-gray-700 text-sm flex items-center gap-2 sm:text-base">
                  <img
                    src={total}
                    alt="total sales icon"
                    className="w-4 h-4"
                  />
                  <span className="text-gray-600 font-medium">
                    Total sales :
                  </span>
                  <span className="font-bold text-lg sm:text-2xl text-gray-600">
                    $12,500
                  </span>
                </p>
              </div>
              <br /> <br />
              <div className="relative flex justify-between items-end h-36 sm:h-40">
                {barChartData.map(({ day, value, color }) => {
                  const isHighest =
                    value === Math.max(...barChartData.map((d) => d.value));
                  return (
                    <div
                      key={day}
                      className="flex flex-col items-center justify-end relative w-6 sm:w-8"
                    >
                      {/* Highest Sale card */}
                      {isHighest && (
                        <div className="absolute -top-14 sm:-top-16 w-18 sm:w-28 bg-[#F1F68E] shadow-md rounded-lg p-2 sm:p-3 text-xs sm:text-sm flex flex-col items-center justify-center text-gray-700 font-medium">
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Highest sale
                          </p>
                          <p className="text-gray-700 font-bold text-sm sm:text-lg mt-1">
                            $2,450
                          </p>
                        </div>
                      )}
                      {/* Bar */}
                      <div
                        className={`rounded-t-md ${color} w-full`}
                        style={{ height: `${value}px` }}
                      ></div>
                      <span className="text-xs mt-1 text-gray-600">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Avg Sale */}
            <div className="flex items-center bg-[#BFE5A6] rounded-3xl mt-4 p-2 sm:p-3">
              <img src={as} alt="" className="w-4 sm:w-5" />
              <p className="text-gray-700 text-sm sm:text-md font-semibold ml-2">
                Avg. sale: $104.16 / per transaction
              </p>
            </div>
          </div>

          {/* Factoring Card */}
          <div className="bg-[#DAFFC2] py-10 px-6 rounded-lg border border-gray-200 max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <img src={factoring} alt="factoring" className="w-6 h-6 mt-1" />
              Factoring Possible Amount
            </h2>

            <div className="bg-blue-50 w-40 py-3 rounded-xl shadow-lg flex flex-col items-center mx-auto">
              <span className="font-medium text-gray-500 text-sm mb-2">
                Available Amount
              </span>
              <span className="flex gap-2 text-2xl font-bold text-gray-700">
                <p>$15,375</p>
                <p className="text-sm self-center">USD</p>
              </span>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex text-xl text-gray-700 mb-2 font-semibold">
                    <img src={dollar} alt="" className="w-6 h-6 mt-1 mr-2" />
                    <p>Factored amount vs. remaining</p>
                  </div>
                </div>

                <div className="flex flex-col gap-10 bg-[#E0F0E5] p-3 rounded-xl">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 font-semibold">
                      Factored Balance
                    </p>
                    <p className="text-gray-800 text-xl font-bold">
                      $11,531.25
                    </p>
                  </div>
                  <div className="relative h-4">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-900 rounded-full transition-all duration-500"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div
                      className="absolute -top-6 text-green-800 font-bold text-lg"
                      style={{ left: "75%" }}
                    >
                      <span className="-translate-x-1/2 inline-block">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Card */}
          <div className="bg-[#F1F68E] p-6 rounded-2xl shadow-lg max-w-sm mx-auto space-y-6">
            <h2 className="flex text-2xl font-bold gap-2">
              <img src={secure} alt="" className="w-6 h-6 mt-2" />
              Secure & Streamlined Workflow
            </h2>

            <div className="items-center space-x-3 bg-white p-3 rounded-xl shadow-sm -skew-y-8 skew-x-8 w-60 mx-auto">
              <div className="flex justify-between items-center text-center">
                <p className="text-gray-900 text-xl font-bold">Recent u</p>
                <p className="text-sm text-gray-500">View All</p>
              </div>

              <div className="bg-green-50 px-4 rounded-xl flex justify-between items-center mt-4">
                <div className="flex -space-x-4">
                  {us.map((u, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={u}
                        alt={`u${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-black font-bold">
                    9+
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-42 h-26 items-center bg-white p-3 rounded-xl shadow-sm">
              <span className="text-gray-500 font-medium mb-1">
                Total Balance
              </span>
              <div className="flex flex-col items-center space-x-2">
                <span className="text-2xl font-bold text-gray-800">
                  $23,576
                </span>
                <button className="text-green-800 font-semibold text-sm hover:underline transition">
                  <span className="bg-green-100 inline-block w-6 h-6 rounded-full">
                    +
                  </span>{" "}
                  Add Number
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm skew-y-6 -skew-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={u3}
                    alt="u3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-800 font-medium">
                  Online <br />{" "}
                  <span className="text-gray-400 text-sm">
                    Tommy Restaurent
                  </span>
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-bold text-center mb-1">
                  +$10k
                </p>
                <button className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-800 transition">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </div>
   
  );
};

export default Dashboard;