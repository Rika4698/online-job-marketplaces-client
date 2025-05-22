/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const statsData = [
    { id: 'supportUser', label: 'Support Users', count: 200, suffix: '+' },
    { id: 'bidJob', label: 'Jobs Bidded', count: 150, suffix: '+' },
    { id: 'companies', label: 'Employer Companies', count: 300, suffix: '+' },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const duration = 1000; // total animation time in ms
      const steps = 30;
      const intervalTime = duration / steps;

      const intervals = statsData.map((stat, index) => {
        let current = 0;
        const increment = Math.ceil(stat.count / steps);

        return setInterval(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(stat.count, newCounts[index] + increment);
            return newCounts;
          });

          current += increment;
          if (current >= stat.count) clearInterval(intervals[index]);
        }, intervalTime);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="pt-12 bg-slate-200 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-emerald-500 sm:text-4xl sm:leading-10">
              Powering Opportunities & Connecting Globally
            </h2>
            <p className="mt-3 text-lg leading-7 text-slate-400 sm:mt-4">
              <span className="text-slate-500 font-semibold">Work Wave</span> connects skilled professionals with top companies worldwide. See how much we've grown.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-slate-200 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-slate-200"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  {statsData.map((stat, index) => (
                    <div
                      key={stat.id}
                      className={`flex flex-col p-6 text-center border-gray-100 border ${
                        index === 0
                          ? 'border-b sm:border-0 sm:border-r'
                          : index === 1
                          ? 'border-t border-b sm:border-0 sm:border-l sm:border-r'
                          : 'border-t sm:border-0 sm:border-l'
                      }`}
                    >
                      <dt className="order-2 mt-2 text-lg font-medium text-gray-500">
                        {stat.label}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-emerald-500">
                        {counts[index]}
                        {counts[index] >= stat.count ? stat.suffix : ''}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
