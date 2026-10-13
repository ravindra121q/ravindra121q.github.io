import { describe, it, expect } from 'vitest';
import { PROFILE } from './profileData';
import { PROJECTS } from './projectsData';
import { EXPERIENCE, EDUCATION } from './experienceData';
import { CAPABILITIES } from './capabilitiesData';

describe('Portfolio Data Integrity', () => {
  it('contains valid profile contact and social information', () => {
    expect(PROFILE.name).toBe('Ravindra');
    expect(PROFILE.email).toMatch(/^[\w.-]+@[\w.-]+\.\w+$/);
    expect(PROFILE.github).toContain('github.com');
    expect(PROFILE.linkedin).toContain('linkedin.com');
    expect(PROFILE.resumeUrl).toContain('drive.google.com');
    expect(PROFILE.stats.length).toBeGreaterThanOrEqual(3);
  });

  it('validates project schema integrity across all projects', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);

    PROJECTS.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(Array.isArray(project.techStack)).toBe(true);
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(Array.isArray(project.highlights)).toBe(true);
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.image).toBeTruthy();
    });
  });

  it('verifies experience records and education structure', () => {
    expect(EXPERIENCE.length).toBeGreaterThanOrEqual(2);
    EXPERIENCE.forEach((item) => {
      expect(item.role).toBeTruthy();
      expect(item.company).toBeTruthy();
      expect(item.period).toBeTruthy();
      expect(Array.isArray(item.highlights)).toBe(true);
      expect(Array.isArray(item.tech)).toBe(true);
    });

    expect(EDUCATION.length).toBeGreaterThanOrEqual(1);
    EDUCATION.forEach((item) => {
      expect(item.degree).toBeTruthy();
      expect(item.institution).toBeTruthy();
    });
  });

  it('verifies capabilities structure', () => {
    expect(CAPABILITIES.length).toBeGreaterThanOrEqual(4);
    CAPABILITIES.forEach((cap) => {
      expect(cap.category).toBeTruthy();
      expect(Array.isArray(cap.skills)).toBe(true);
      expect(cap.skills.length).toBeGreaterThan(0);
    });
  });
});
