import React from 'react';
import { Lock, Cpu, Code, Target } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ComparisonSlide() {
  const rows = [
    {
      id: 1,
      icon: <Lock />,
      title: "Access to Internals:",
      whiteBox: "Full (architecture, gradients)",
      blackBox: "None (only query/response)"
    },
    {
      id: 2,
      icon: <Cpu />,
      title: "Computational Overhead:",
      whiteBox: "Very high (billions of parameters)",
      blackBox: "Moderate (iterative querying)"
    },
    {
      id: 3,
      icon: <Code />,
      title: "Implementation Complexity:",
      whiteBox: "Complex (custom gradient methods)",
      blackBox: "Simpler heuristics/search methods"
    },
    {
      id: 4,
      icon: <Target />,
      title: "Realistic Threat Model:",
      whiteBox: "Less so (rare full access)",
      blackBox: "More so (typical API usage)"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          White-Box vs Black-Box Attacks
        </h2>

        {/* Table */}
        <div className="flex-1">
          <table className="w-full border-separate border-spacing-y-4">
            {/* Headers */}
            <thead>
              <tr>
                <th className="w-[300px]"></th> {/* Empty cell for alignment */}
                <th className="text-2xl font-semibold text-blue-400 text-left px-4">
                  White-Box
                </th>
                <th className="text-2xl font-semibold text-green-400 text-left px-4">
                  Black-Box
                </th>
              </tr>
            </thead>

            {/* Content */}
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className="bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300"
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.15}s`
                  }}
                >
                  {/* Label cell */}
                  <td className="py-4 px-4 rounded-l-lg">
                    <div className="flex items-center gap-3">
                      {React.cloneElement(row.icon, {
                        className: "w-5 h-5 text-gray-400"
                      })}
                      <span className="text-lg text-white whitespace-nowrap">
                        {row.title}
                      </span>
                    </div>
                  </td>

                  {/* White-Box cell */}
                  <td className="py-4 px-4 text-gray-300">
                    {row.whiteBox}
                  </td>

                  {/* Black-Box cell */}
                  <td className="py-4 px-4 rounded-r-lg text-gray-300">
                    {row.blackBox}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </SlideWrapper>
  );
}