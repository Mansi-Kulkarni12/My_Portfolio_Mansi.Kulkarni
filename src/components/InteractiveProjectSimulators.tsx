import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, TrendingUp, Users, ShieldAlert, CheckCircle2, Play, RotateCcw, Activity } from 'lucide-react';

interface HRSimulatorProps {
  compact?: boolean;
}

export const HRDashboardSimulator: React.FC<HRSimulatorProps> = ({ compact = false }) => {
  const [selectedDept, setSelectedDept] = useState<'All' | 'Engineering' | 'R&D' | 'Sales' | 'HR'>('All');
  const [overtime, setOvertime] = useState<boolean>(false);

  const getMetrics = () => {
    let baseAttrition = 16.1;
    let baseHeadcount = 1470;
    let baseSatisfaction = 82;
    let baseTenure = 5.4;

    if (selectedDept === 'Engineering') {
      baseAttrition = 21.4;
      baseHeadcount = 440;
      baseSatisfaction = 76;
      baseTenure = 4.2;
    } else if (selectedDept === 'R&D') {
      baseAttrition = 11.2;
      baseHeadcount = 520;
      baseSatisfaction = 89;
      baseTenure = 6.1;
    } else if (selectedDept === 'Sales') {
      baseAttrition = 26.8;
      baseHeadcount = 360;
      baseSatisfaction = 72;
      baseTenure = 3.8;
    } else if (selectedDept === 'HR') {
      baseAttrition = 9.5;
      baseHeadcount = 150;
      baseSatisfaction = 94;
      baseTenure = 6.8;
    }

    if (overtime) {
      baseAttrition += 8.6;
      baseSatisfaction -= 14;
    }

    const retention = (100 - baseAttrition).toFixed(1);
    const riskLevel = baseAttrition > 25 ? 'High Risk' : baseAttrition > 15 ? 'Moderate Risk' : 'Healthy Retention';
    const riskColor = baseAttrition > 25 ? '#B91C1C' : baseAttrition > 15 ? '#7A1E34' : '#1F5F44';

    return {
      attrition: baseAttrition.toFixed(1),
      retention,
      headcount: baseHeadcount,
      satisfaction: Math.max(10, Math.min(100, baseSatisfaction)),
      tenure: baseTenure.toFixed(1),
      riskLevel,
      riskColor,
    };
  };

  const metrics = getMetrics();

  return (
    <div className="bg-[#FFFFFF] border border-[#E5DFD7] p-5 sm:p-6 space-y-5">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5DFD7]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#181516] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-tech font-bold">
            01
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#181516] tracking-wider uppercase">
              LIVE HR ANALYTICS DASHBOARD SIMULATOR
            </div>
            <span className="text-[10px] font-mono-tech text-[#8C8283]">
              1-Screen Power BI Model · Interactive DAX Measures
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedDept('All');
            setOvertime(false);
          }}
          className="text-[11px] font-mono-tech text-[#7A1E34] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Model</span>
        </button>
      </div>

      {/* Filter controls */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-mono-tech uppercase font-bold text-[#8C8283]">
            DEPARTMENT SLICER:
          </span>
          <button
            onClick={() => setOvertime(!overtime)}
            className={`px-3 py-1 text-[10px] font-mono-tech uppercase transition-colors cursor-pointer border ${
              overtime
                ? 'bg-[#7A1E34] text-[#FBF9F5] border-[#7A1E34]'
                : 'bg-[#FBF9F5] text-[#5C5455] border-[#E5DFD7] hover:bg-[#F4EFEA]'
            }`}
          >
            {overtime ? 'OVERTIME: ACTIVE (+RISK)' : 'OVERTIME: STANDARD'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['All', 'Engineering', 'R&D', 'Sales', 'HR'] as const).map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 text-xs font-mono-tech transition-colors cursor-pointer border ${
                selectedDept === dept
                  ? 'bg-[#181516] text-[#FBF9F5] border-[#181516] font-semibold'
                  : 'bg-[#FBF9F5] text-[#181516] border-[#E5DFD7] hover:bg-[#F4EFEA]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Live Calculated KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">ATTRITION RATE</div>
          <div
            className="font-display text-xl sm:text-2xl font-bold mt-0.5"
            style={{ color: metrics.riskColor }}
          >
            {metrics.attrition}%
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455] uppercase block mt-0.5">
            {metrics.riskLevel}
          </span>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">RETENTION RATE</div>
          <div className="font-display text-xl sm:text-2xl font-bold text-[#1F5F44] mt-0.5">
            {metrics.retention}%
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455] block mt-0.5">&gt;80% Target</span>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">ACTIVE HEADCOUNT</div>
          <div className="font-display text-xl sm:text-2xl font-bold text-[#181516] mt-0.5">
            {metrics.headcount}
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455] block mt-0.5">Employees</span>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">SATISFACTION INDEX</div>
          <div className="font-display text-xl sm:text-2xl font-bold text-[#7A1E34] mt-0.5">
            {metrics.satisfaction}/100
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455] block mt-0.5">Avg {metrics.tenure} yrs</span>
        </div>
      </div>

      {/* Visual Animated Retention Bar */}
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between text-xs font-mono-tech text-[#5C5455]">
          <span>Workforce Retention Baseline</span>
          <span className="font-semibold text-[#181516]">{metrics.retention}% Retained</span>
        </div>
        <div className="w-full h-1.5 bg-[#E5DFD7] overflow-hidden">
          <motion.div
            className="h-full bg-[#181516]"
            initial={false}
            animate={{ width: `${metrics.retention}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export const CreditCardSimulator: React.FC = () => {
  const [segment, setSegment] = useState<'General' | 'HighSpender' | 'Revolving' | 'Delinquent'>('General');

  const segmentData = {
    General: {
      utilization: '38.4%',
      avgLimit: '$12,400',
      churnRate: '4.2%',
      sqlLatency: '11ms',
      status: 'Stable Portfolio',
      statusColor: '#1F5F44',
      note: 'Balanced utilization with high payment consistency across standard accounts.',
    },
    HighSpender: {
      utilization: '24.1%',
      avgLimit: '$35,000',
      churnRate: '1.8%',
      sqlLatency: '9ms',
      status: 'Prime Tier',
      statusColor: '#7A1E34',
      note: 'Premium tier accounts driving 64% of total transaction interchange fees.',
    },
    Revolving: {
      utilization: '68.5%',
      avgLimit: '$8,200',
      churnRate: '12.4%',
      sqlLatency: '14ms',
      status: 'Revolver Margin',
      statusColor: '#A67314',
      note: 'High net interest margin; monitored via PostgreSQL automated threshold alerts.',
    },
    Delinquent: {
      utilization: '89.2%',
      avgLimit: '$5,500',
      churnRate: '34.8%',
      sqlLatency: '16ms',
      status: 'Intervention Required',
      statusColor: '#B91C1C',
      note: 'Early warning trigger flagged in PostgreSQL customer intelligence view.',
    },
  };

  const current = segmentData[segment];

  return (
    <div className="bg-[#FFFFFF] border border-[#E5DFD7] p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5DFD7]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#181516] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-tech font-bold">
            02
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#181516] tracking-wider uppercase">
              POSTGRESQL &amp; POWER BI PORTFOLIO EXPLORER
            </div>
            <span className="text-[10px] font-mono-tech text-[#8C8283]">
              Relational Schema Extraction + DAX Measures
            </span>
          </div>
        </div>

        <span
          className="text-xs font-mono-tech font-semibold uppercase tracking-wider"
          style={{ color: current.statusColor }}
        >
          // {current.status}
        </span>
      </div>

      {/* Segment Selector */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono-tech uppercase font-bold text-[#8C8283]">
          SELECT RISK SEGMENT:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { key: 'General', label: 'All Accounts' },
            { key: 'HighSpender', label: 'Prime Spenders' },
            { key: 'Revolving', label: 'Revolver Debt' },
            { key: 'Delinquent', label: 'Delinquency Flag' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setSegment(item.key as any)}
              className={`py-2 px-3 text-xs font-mono-tech text-center transition-colors cursor-pointer border ${
                segment === item.key
                  ? 'bg-[#181516] text-[#FBF9F5] border-[#181516] font-semibold'
                  : 'bg-[#FBF9F5] text-[#5C5455] border-[#E5DFD7] hover:bg-[#F4EFEA]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">UTILIZATION</div>
          <div className="font-display text-xl font-bold text-[#181516] mt-0.5">
            {current.utilization}
          </div>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">AVG CREDIT LIMIT</div>
          <div className="font-display text-xl font-bold text-[#7A1E34] mt-0.5">
            {current.avgLimit}
          </div>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">CHURN PROBABILITY</div>
          <div
            className="font-display text-xl font-bold mt-0.5"
            style={{ color: current.statusColor }}
          >
            {current.churnRate}
          </div>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">SQL QUERY SPEED</div>
          <div className="font-display text-xl font-bold text-[#1F5F44] mt-0.5">
            {current.sqlLatency}
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-xs text-[#5C5455]">
        <strong className="text-[#181516] font-semibold">Analytical Insights:</strong> {current.note}
      </div>
    </div>
  );
};

export const SQLBenchmarkSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<'optimized' | 'raw'>('optimized');

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 550);
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E5DFD7] p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5DFD7]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#181516] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-tech font-bold">
            03
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#181516] tracking-wider uppercase">
              SQL QUERY OPTIMIZATION BENCHMARK
            </div>
            <span className="text-[10px] font-mono-tech text-[#8C8283]">
              Hospital Patient Visits &amp; Bookstore Sales Optimization
            </span>
          </div>
        </div>

        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-3 py-1.5 bg-[#181516] hover:bg-[#7A1E34] text-[#FBF9F5] text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>{isRunning ? 'EXECUTING...' : 'RUN EXECUTION TEST'}</span>
        </button>
      </div>

      {/* Query Mode Switch */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setMode('raw')}
          className={`p-3 text-left border transition-colors cursor-pointer ${
            mode === 'raw'
              ? 'bg-[#181516] text-[#FBF9F5] border-[#181516]'
              : 'bg-[#FBF9F5] text-[#5C5455] border-[#E5DFD7] hover:bg-[#F4EFEA]'
          }`}
        >
          <div className="text-[10px] font-mono-tech uppercase">PRE-OPTIMIZATION</div>
          <div className="text-xs font-bold mt-0.5">Nested Correlated Subqueries</div>
          <div className="text-[10px] font-mono-tech opacity-70 mt-1">Full Table Scan · 20% Errors</div>
        </button>

        <button
          onClick={() => setMode('optimized')}
          className={`p-3 text-left border transition-colors cursor-pointer ${
            mode === 'optimized'
              ? 'bg-[#181516] text-[#FBF9F5] border-[#181516]'
              : 'bg-[#FBF9F5] text-[#5C5455] border-[#E5DFD7] hover:bg-[#F4EFEA]'
          }`}
        >
          <div className="text-[10px] font-mono-tech uppercase">AFTER MANSI'S TUNING</div>
          <div className="text-xs font-bold mt-0.5">Indexed CTEs &amp; Composite Joins</div>
          <div className="text-[10px] font-mono-tech opacity-70 mt-1">B-Tree Indexes · 30% Speedup</div>
        </button>
      </div>

      {/* Result Metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">EXECUTION TIME</div>
          <div
            className={`font-display text-xl font-bold mt-0.5 ${
              mode === 'optimized' ? 'text-[#1F5F44]' : 'text-[#B91C1C]'
            }`}
          >
            {mode === 'optimized' ? '85 ms' : '420 ms'}
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455]">
            {mode === 'optimized' ? '30% Faster' : 'Baseline'}
          </span>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">ERROR RATE</div>
          <div
            className={`font-display text-xl font-bold mt-0.5 ${
              mode === 'optimized' ? 'text-[#1F5F44]' : 'text-[#B91C1C]'
            }`}
          >
            {mode === 'optimized' ? '0%' : '20%'}
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455]">
            {mode === 'optimized' ? 'Zero Warnings' : 'Timeout Risks'}
          </span>
        </div>

        <div className="p-3 bg-[#FBF9F5] border border-[#E5DFD7] text-center">
          <div className="text-[10px] font-mono-tech uppercase text-[#8C8283]">INDEX UTILIZATION</div>
          <div className="font-display text-xl font-bold text-[#7A1E34] mt-0.5">
            {mode === 'optimized' ? 'B-Tree' : 'None'}
          </div>
          <span className="text-[10px] font-mono-tech text-[#5C5455]">
            {mode === 'optimized' ? 'Composite Keys' : 'Sequential Scan'}
          </span>
        </div>
      </div>
    </div>
  );
};
