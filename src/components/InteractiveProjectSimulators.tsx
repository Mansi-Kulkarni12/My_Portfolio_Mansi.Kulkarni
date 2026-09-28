import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, TrendingUp, Users, ShieldAlert, CheckCircle2, Zap, Play, RotateCcw, Filter, Sparkles, Layers } from 'lucide-react';

interface HRSimulatorProps {
  compact?: boolean;
}

export const HRDashboardSimulator: React.FC<HRSimulatorProps> = ({ compact = false }) => {
  const [selectedDept, setSelectedDept] = useState<'All' | 'Engineering' | 'R&D' | 'Sales' | 'HR'>('All');
  const [overtime, setOvertime] = useState<boolean>(false);

  // Dynamic calculations based on department and overtime
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
    const riskLevel = baseAttrition > 25 ? 'High Risk' : baseAttrition > 15 ? 'Moderate' : 'Low Risk';
    const riskColor = baseAttrition > 25 ? '#B91C1C' : baseAttrition > 15 ? '#C85B7B' : '#047857';
    const riskBg = baseAttrition > 25 ? '#FEF2F2' : baseAttrition > 15 ? '#FFF0F4' : '#ECFDF5';

    return {
      attrition: baseAttrition.toFixed(1),
      retention,
      headcount: baseHeadcount,
      satisfaction: Math.max(10, Math.min(100, baseSatisfaction)),
      tenure: baseTenure.toFixed(1),
      riskLevel,
      riskColor,
      riskBg,
    };
  };

  const metrics = getMetrics();

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#EFAFC2]/80 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F7CDD9]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] flex items-center justify-center text-[10px] font-bold">
            1
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#382629] flex items-center gap-1.5">
              <span>EXECUTIVE HR DASHBOARD // LIVE SIMULATOR</span>
              <Sparkles className="w-3 h-3 text-[#C85B7B]" />
            </div>
            <span className="text-[10px] font-mono-tech text-[#9E7D84]">
              Interactive 1-Screen Power BI Model
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedDept('All');
            setOvertime(false);
          }}
          className="text-[10px] font-mono-tech text-[#9F3D5C] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-2.5 h-2.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Filter controls */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-mono-tech uppercase font-bold text-[#9E7D84]">
            Select Department Filter:
          </span>
          <button
            onClick={() => setOvertime(!overtime)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech font-bold transition-all cursor-pointer border ${
              overtime
                ? 'bg-[#B91C1C] text-[#FFF8F5] border-[#991B1B] shadow-2xs'
                : 'bg-[#FFF8F5] text-[#6B4E54] border-[#F7CDD9] hover:bg-[#FCE4EC]'
            }`}
          >
            {overtime ? '✦ OVERTIME ACTIVE (+RISK)' : 'STANDARD HOURS'}
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {(['All', 'Engineering', 'R&D', 'Sales', 'HR'] as const).map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono-tech font-medium transition-all cursor-pointer ${
                selectedDept === dept
                  ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] font-bold shadow-2xs'
                  : 'bg-[#FFF8F5] text-[#5C1D2E] border border-[#F7CDD9] hover:bg-[#FCE4EC]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Live Calculated KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">ATTRITION RISK</div>
          <div
            className="font-display text-lg sm:text-xl font-bold transition-colors"
            style={{ color: metrics.riskColor }}
          >
            {metrics.attrition}%
          </div>
          <span
            className="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-mono-tech font-bold uppercase mt-0.5"
            style={{ backgroundColor: metrics.riskBg, color: metrics.riskColor }}
          >
            {metrics.riskLevel}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">RETENTION RATE</div>
          <div className="font-display text-lg sm:text-xl font-bold text-[#047857]">
            {metrics.retention}%
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">Benchmark &gt;80%</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">HEADCOUNT</div>
          <div className="font-display text-lg sm:text-xl font-bold text-[#382629]">
            {metrics.headcount}
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">Employees</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">SATISFACTION</div>
          <div className="font-display text-lg sm:text-xl font-bold text-[#9F3D5C]">
            {metrics.satisfaction}/100
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">Avg {metrics.tenure} yrs</span>
        </div>
      </div>

      {/* Visual Animated Retention Bar */}
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between text-[10px] font-mono-tech text-[#5C1D2E]">
          <span>Workforce Retention Baseline</span>
          <span className="font-bold">{metrics.retention}% Retained</span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#FCE4EC] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C85B7B] to-[#9F3D5C]"
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
      statusColor: '#047857',
      statusBg: '#ECFDF5',
      note: 'Balanced utilization with high payment consistency across standard accounts.',
    },
    HighSpender: {
      utilization: '24.1%',
      avgLimit: '$35,000',
      churnRate: '1.8%',
      sqlLatency: '9ms',
      status: 'High Net-Worth',
      statusColor: '#9F3D5C',
      statusBg: '#FFF0F4',
      note: 'Premium tier drivers generating 64% of total transaction fee revenue.',
    },
    Revolving: {
      utilization: '68.5%',
      avgLimit: '$8,200',
      churnRate: '12.4%',
      sqlLatency: '14ms',
      status: 'High Interest Margin',
      statusColor: '#D97706',
      statusBg: '#FFFBEB',
      note: 'Significant interest revenue generator; monitored for sudden credit stress.',
    },
    Delinquent: {
      utilization: '89.2%',
      avgLimit: '$5,500',
      churnRate: '34.8%',
      sqlLatency: '16ms',
      status: 'Intervention Triggered',
      statusColor: '#B91C1C',
      statusBg: '#FEF2F2',
      note: 'Early warning flag triggered in PostgreSQL customer intelligence view.',
    },
  };

  const current = segmentData[segment];

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#EFAFC2]/80 p-4 sm:p-5 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F7CDD9]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] flex items-center justify-center text-[10px] font-bold">
            BI
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#382629] flex items-center gap-1.5">
              <span>CUSTOMER SEGMENT INTELLIGENCE EXPLORER</span>
              <Sparkles className="w-3 h-3 text-[#C85B7B]" />
            </div>
            <span className="text-[10px] font-mono-tech text-[#9E7D84]">
              PostgreSQL Schema + Power BI DAX
            </span>
          </div>
        </div>

        <span
          className="px-2 py-0.5 rounded-full text-[9px] font-mono-tech font-bold uppercase"
          style={{ backgroundColor: current.statusBg, color: current.statusColor }}
        >
          {current.status}
        </span>
      </div>

      {/* Segment Selector */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono-tech uppercase font-bold text-[#9E7D84]">
          Select Portfolio Risk Segment:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {[
            { key: 'General', label: 'All Accounts' },
            { key: 'HighSpender', label: 'High Spenders' },
            { key: 'Revolving', label: 'Revolver Debt' },
            { key: 'Delinquent', label: 'Delinquency' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setSegment(item.key as any)}
              className={`py-1.5 px-2 rounded-xl text-[10px] font-mono-tech font-semibold text-center transition-all cursor-pointer ${
                segment === item.key
                  ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] shadow-2xs'
                  : 'bg-[#FFF8F5] text-[#5C1D2E] border border-[#F7CDD9] hover:bg-[#FCE4EC]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">UTILIZATION</div>
          <div className="font-display text-base sm:text-lg font-bold text-[#382629]">
            {current.utilization}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">AVG CREDIT LIMIT</div>
          <div className="font-display text-base sm:text-lg font-bold text-[#9F3D5C]">
            {current.avgLimit}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">CHURN RISK</div>
          <div
            className="font-display text-base sm:text-lg font-bold"
            style={{ color: current.statusColor }}
          >
            {current.churnRate}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">SQL QUERY SPEED</div>
          <div className="font-display text-base sm:text-lg font-bold text-[#047857]">
            {current.sqlLatency}
          </div>
        </div>
      </div>

      <p className="text-[11px] text-[#5C1D2E] bg-[#FFF0F4] p-2.5 rounded-xl border border-[#F7CDD9]">
        <strong>Insights:</strong> {current.note}
      </p>
    </div>
  );
};

export const SQLBenchmarkSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(true);
  const [mode, setMode] = useState<'optimized' | 'raw'>('optimized');

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 600);
  };

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#EFAFC2]/80 p-4 sm:p-5 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F7CDD9]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] flex items-center justify-center text-[10px] font-bold">
            SQL
          </div>
          <div>
            <div className="text-xs font-mono-tech font-bold text-[#382629] flex items-center gap-1.5">
              <span>SQL QUERY OPTIMIZATION BENCHMARK</span>
              <Sparkles className="w-3 h-3 text-[#C85B7B]" />
            </div>
            <span className="text-[10px] font-mono-tech text-[#9E7D84]">
              Healthcare & Bookstore Performance Engine
            </span>
          </div>
        </div>

        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-3 py-1 rounded-full bg-[#9F3D5C] hover:bg-[#822E49] text-[#FFF8F5] text-[10px] font-mono-tech font-bold flex items-center gap-1 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
        >
          {isRunning ? (
            <span>Executing...</span>
          ) : (
            <>
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>Run Execution Test</span>
            </>
          )}
        </button>
      </div>

      {/* Query Mode Switch */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setMode('raw')}
          className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
            mode === 'raw'
              ? 'bg-[#FEF2F2] border-[#F87171] text-[#991B1B]'
              : 'bg-[#FFF8F5] border-[#F7CDD9] text-[#6B4E54] hover:bg-[#FCE4EC]'
          }`}
        >
          <div className="text-[10px] font-mono-tech font-bold uppercase">Before Optimization</div>
          <div className="text-xs font-display font-bold mt-0.5">Raw Nested Subqueries</div>
          <div className="text-[9px] font-mono-tech text-[#9E7D84] mt-1">Full Table Scan · 20% Errors</div>
        </button>

        <button
          onClick={() => setMode('optimized')}
          className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
            mode === 'optimized'
              ? 'bg-[#ECFDF5] border-[#34D399] text-[#065F46]'
              : 'bg-[#FFF8F5] border-[#F7CDD9] text-[#6B4E54] hover:bg-[#FCE4EC]'
          }`}
        >
          <div className="text-[10px] font-mono-tech font-bold uppercase">After Mansi's Tuning</div>
          <div className="text-xs font-display font-bold mt-0.5">Indexed CTEs & Joins</div>
          <div className="text-[9px] font-mono-tech text-[#059669] mt-1">B-Tree Indexes · 30% Speedup</div>
        </button>
      </div>

      {/* Result Metrics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">EXECUTION TIME</div>
          <div
            className={`font-display text-base sm:text-lg font-bold ${
              mode === 'optimized' ? 'text-[#047857]' : 'text-[#B91C1C]'
            }`}
          >
            {mode === 'optimized' ? '85 ms' : '420 ms'}
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">
            {mode === 'optimized' ? '30% Faster' : 'Baseline'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">ERROR RATE</div>
          <div
            className={`font-display text-base sm:text-lg font-bold ${
              mode === 'optimized' ? 'text-[#047857]' : 'text-[#B91C1C]'
            }`}
          >
            {mode === 'optimized' ? '0%' : '20%'}
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">
            {mode === 'optimized' ? 'Zero Warnings' : 'Timeout Risks'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF8F5] border border-[#F7CDD9] text-center">
          <div className="text-[9px] font-mono-tech uppercase text-[#9E7D84]">INDEX USAGE</div>
          <div className="font-display text-base sm:text-lg font-bold text-[#9F3D5C]">
            {mode === 'optimized' ? 'B-Tree' : 'None'}
          </div>
          <span className="text-[9px] font-mono-tech text-[#9E7D84]">
            {mode === 'optimized' ? 'Composite Keys' : 'Seq Scan'}
          </span>
        </div>
      </div>
    </div>
  );
};
