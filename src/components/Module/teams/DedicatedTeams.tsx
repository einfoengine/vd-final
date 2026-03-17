"use client";

import Card from "@/components/Module/cards/Card";

export default function DedicatedTeams() {
  const teams = [
    {
      title: "Operations Team",
      description:
        "Planning, Business development, Client relations, Project management, Quality control",
      icon: "/assets/svg/team.svg",
    },
    {
      title: "Strategy Development Team",
      description:
        "Data-driven strategy development, market analysis, competitive research, and actionable roadmaps",
      icon: "/assets/svg/execution.svg",
    },
    {
      title: "Content Development Team",
      description:
        "Creative content creation, video production, graphic design, copywriting, and Animation & Videos",
      icon: "/assets/svg/content-team.svg",
    },
    {
      title: "UI/UX Design Team",
      description:
        "User interface design, user experience optimization, wireframing, prototyping, and design systems for websites and applications",
      icon: "/assets/svg/uiux.svg",
    },
    {
      title: "Development Team",
      description:
        "Full-stack development, website creation, application development, API integration, and technical implementation",
      icon: "/assets/svg/development.svg",
    },
    {
      title: "Growth & Management Team",
      description:
        "Manage all client websites and social media channels, PPC campaigns, media buying, and performance optimization",
      icon: "/assets/svg/digitalstrategy.svg",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {teams.map((team, index) => (
        <Card
          key={index}
          icon={team.icon}
          title={team.title}
          description={team.description}
        />
      ))}
    </div>
  );
}
