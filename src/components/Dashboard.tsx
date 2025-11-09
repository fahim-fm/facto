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
  const users = [u1, u2, u3, u4];

  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" },
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  const highestValue = Math.max(...barChartData.map((d) => d.value));

  return (
    <section className="w-full bg-[#F9FAFB] py-8 sm:py-12 lg:py-16">
      {/* Max-width container – 1440px on XL */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-9 xl:gap-[36px]">
          {/* ==================== Card 1: Sales Overview ==================== */}
          <div
            className="bg-[#E0F0E5] rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10 
                          flex flex-col h-[457px] min-h-[600px] lg:min-h-[665px]"
          >
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex items-center gap-6">
                <img src={sales} alt="Sales" className="w-10 h-10" />
                <h2 className="w-[334px] h-[62px] text-[28px] sm:text-[32px] font-bold font-roboto text-gray-800 leading-tight">
                  Sales overview from Previous Day
                </h2>
              </div>

              {/* Sales Stats Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mt-8 flex-1 min-h-[340px]">
                <div className="flex items-center gap-2">
                  <img src={total} alt="Total" className="w-8 h-8" />
                  <span className="font-manrope text-[22px] text-[#686868]">
                    Total sales:
                  </span>
                  <span className="font-roboto font-bold text-[30px] text-[#686868]">
                    $12,500
                  </span>
                </div>

                {/* Bar Chart */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-2 h-[180px]">
                  {barChartData.map(({ day, value, color }) => {
                    const isHighest = value === highestValue;
                    return (
                      <div
                        key={day}
                        className="flex flex-col items-center flex-1 relative"
                      >
                        {isHighest && (
                          <div
                            className="absolute -top-20 left-1/2 -translate-x-1/2 
                                          bg-[#F1F68E] rounded-xl shadow-md p-3 text-center 
                                          w-32 text-[#141414] font-roboto"
                          >
                            <p className="text-sm">Highest sale</p>
                            <p className="text-xl font-bold mt-1">$2,450</p>
                          </div>
                        )}
                        <div
                          className={`w-full rounded-t-md ${color} transition-all`}
                          style={{
                            height: `${(value / highestValue) * 140}px`,
                          }}
                        />
                        <span className="mt-2 text-xs text-[#666]">{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Avg Sale */}
              <div className="flex items-center gap-4 p-4 bg-[#BFE5A6] rounded-3xl">
                <img src={as} alt="Avg" className="w-6 h-6" />
                <p className="font-roboto text-lg text-[#141414]">
                  Avg. sale: <strong>$104.16</strong> / per transaction
                </p>
              </div>
            </div>
          </div>

          {/* ==================== Card 2: Factoring ==================== */}
          <div
            className="bg-[#DAFFC2] rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10 
                          flex flex-col h-full min-h-[600px] lg:min-h-[665px]"
          >
            <div className="flex items-center gap-6 mb-8">
              <img src={factoring} alt="Factoring" className="w-12 h-12" />
              <div className="w-[316px] h-[77px] text-[#141414] font-roboto font-semibold text-[32px] leading-[40px]">
                Factoring Possible Amount.
              </div>
            </div>

            {/* Available Amount */}
           <div className=" ml-[77.5px] mr-[65.5px] mt-[54px] mb-[36px] w-[245px] h-[125px]  bg-white rounded-[25px] p-[24px] flex flex-col items-center gap-[16px]">
  {/* Available Amount Label */}
  <p className="w-[197px] h-[21px] font-manrope font-normal text-[24px] leading-[36px] text-center text-[#686868] flex items-center">
    Available amount
  </p>

  {/* Balance Section */}
  <div className="w-[197px] h-[40px] flex flex-row justify-center items-center gap-[24px]">
    {/* Amount */}
    <p className="w-[118px] h-[40px] font-roboto font-semibold text-[32px] leading-[40px] text-[#141414] flex items-center">
      $15,375
    </p>

    {/* Currency */}
    <p className="w-[35px] h-[19px] font-roboto font-semibold text-[18px] leading-[30px] text-[#141414] flex items-center">
      USD
    </p>
  </div>
</div>


            {/* Factored vs Remaining */}
            <div className="bg-white rounded-3xl p-6 shadow-lg mt-8 mx-auto w-full max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-[#E0F0E5] rounded-full flex items-center justify-center">
                  <img src={dollar} alt="$" className="w-8 h-8" />
                </div>
                <p className="font-roboto text-xl text-[#141414]">
                  Factored amount vs. remaining
                </p>
              </div>

              <div className="bg-[#E0F0E5] rounded-3xl p-6">
                <div className="flex justify-between mb-4">
                  <p className="font-roboto text-lg text-[#686868]">
                    Factored Balance
                  </p>
                  <p className="font-roboto text-xl font-bold text-[#141414]">
                    $11,531.25
                  </p>
                </div>
                <div className="relative h-4 bg-[#F2F2F2] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#0F4E23] rounded-full"
                    style={{ width: "75%" }}
                  />
                  <span className="absolute top-[-28px] left-[70%] -translate-x-1/2 text-lg font-roboto text-[#141414]">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== Card 3: Secure Workflow ==================== */}
          <div
            className="bg-[#F1F68E] rounded-xl p-6 sm:p-8 lg:p-10 
                          flex flex-col h-full min-h-[600px] lg:min-h-[665px] gap-6"
          >
            <div className="flex items-center gap-6">
              <img src={secure} alt="Secure" className="w-12 h-12" />
              <h2 className="text-[28px] sm:text-[32px] font-bold font-roboto text-[#141414] leading-tight">
                Secure & Streamlined Workflow
              </h2>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {/* Recent Users */}
              <div className="mt-[15px] bg-white p-4 rounded-xl shadow-sm mx-auto w-full max-w-xs -rotate-[25.89deg]">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-roboto font-bold text-lg">Recent user</p>
                  <p className="text-sm text-gray-500 cursor-pointer hover:underline">
                    View All
                  </p>
                </div>
                <div className="flex -space-x-3">
                  {users.map((u, i) => (
                    <img
                      key={i}
                      src={u}
                      alt={`User ${i + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div
                    className="w-12 h-12 rounded-full bg-lime-100 border-2 border-white 
                                   flex items-center justify-center text-sm font-bold text-black"
                  >
                    9+
                  </div>
                </div>
              </div>

              {/* Total Balance */}
              <div className="w-[195.61px] h-[163.95px] bg-white p-4 rounded-xl shadow-sm self-center lg:self-end max-w-xs ">
                <p className="text-gray-500 font-roboto text-lg">
                  Total Balance
                </p>
                <p className="text-2xl font-bold text-gray-800 font-roboto mt-1">
                  $23,576
                </p>
                <button className="mt-3 flex items-center gap-2 text-green-800 font-semibold hover:underline">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm">
                    +
                  </span>
                  Add Number
                </button>
              </div>

              {/* Online User */}
              <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center mx-auto w-full max-w-md rotate-[6.89deg]">
                <div className="flex items-center gap-4">
                  <img
                    src={u3}
                    alt="Tommy"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <p className="font-roboto font-bold text-xl">Online</p>
                    <p className="text-sm text-gray-400 font-roboto">
                      Tommy Restaurant
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-700">+$10k</p>
                  <button
                    className="mt-1 bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium 
                                      hover:bg-green-300 transition"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
