import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ModulesBento from "@/components/ModulesBento";
import HowItWorks from "@/components/HowItWorks";
import RoleDashboards from "@/components/RoleDashboards";
import DashboardDemo from "@/components/DashboardDemo";
import AiSimulation from "@/components/AiSimulation";
import Upskilling from "@/components/Upskilling";
import Impact from "@/components/Impact";
import Architecture from "@/components/Architecture";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ModulesBento />
      <HowItWorks />
      <RoleDashboards />
      <DashboardDemo />
      <AiSimulation />
      <Upskilling />
      <Impact />
      <Architecture />
    </>
  );
}
