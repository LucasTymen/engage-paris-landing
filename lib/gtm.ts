// lib/gtm.ts
"use client";

// Types pour les événements GTM
export interface GTMEvent {
  event: string;
  event_category?: string;
  event_action?: string;
  event_label?: string;
  value?: number;
  user_id?: string;
  content_group1?: string;
  custom_parameter?: any;
}

// Fonction pour envoyer des événements à GTM
export const gtmPush = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      ...eventData,
      timestamp: new Date().toISOString(),
    });
    
    // Debug en développement
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 GTM Event:', eventData);
    }
  }
};

// Événements prédéfinis pour Engage Paris
export const engageParisEvents = {
  // Navigation
  pageView: (pageName: string) => gtmPush({
    event: 'page_view',
    event_category: 'Navigation',
    event_action: 'Page View',
    event_label: pageName,
    content_group1: 'Engage Paris Landing'
  }),

  // Interactions utilisateur
  buttonClick: (buttonName: string, section: string) => gtmPush({
    event: 'button_click',
    event_category: 'User Interaction',
    event_action: 'Button Click',
    event_label: buttonName,
    custom_parameter: { section }
  }),

  // Formulaires
  formStart: (formName: string) => gtmPush({
    event: 'form_start',
    event_category: 'Form',
    event_action: 'Form Start',
    event_label: formName
  }),

  formSubmit: (formName: string, success: boolean) => gtmPush({
    event: 'form_submit',
    event_category: 'Form',
    event_action: success ? 'Form Submit Success' : 'Form Submit Error',
    event_label: formName,
    value: success ? 1 : 0
  }),

  // Calendly
  calendlyOpen: () => gtmPush({
    event: 'calendly_open',
    event_category: 'Calendly',
    event_action: 'Widget Open',
    event_label: 'Engage Paris CTA'
  }),

  calendlyScheduled: () => gtmPush({
    event: 'calendly_scheduled',
    event_category: 'Calendly',
    event_action: 'Meeting Scheduled',
    event_label: 'Engage Paris',
    value: 1
  }),

  // Contenu
  articleView: (articleTitle: string) => gtmPush({
    event: 'content_view',
    event_category: 'Content',
    event_action: 'Article View',
    event_label: articleTitle
  }),

  galleryInteraction: (action: string) => gtmPush({
    event: 'gallery_interaction',
    event_category: 'Gallery',
    event_action: action,
    event_label: 'Photo Gallery'
  }),

  // Scroll tracking
  scrollDepth: (percentage: number) => gtmPush({
    event: 'scroll_depth',
    event_category: 'Engagement',
    event_action: 'Scroll Depth',
    event_label: `${percentage}%`,
    value: percentage
  }),

  // FAQ
  faqExpand: (question: string) => gtmPush({
    event: 'faq_expand',
    event_category: 'FAQ',
    event_action: 'Question Expand',
    event_label: question
  }),

  // Sponsors
  sponsorClick: (sponsorName: string) => gtmPush({
    event: 'sponsor_click',
    event_category: 'Sponsors',
    event_action: 'Sponsor Link Click',
    event_label: sponsorName
  })
};

// Hook React pour utiliser GTM facilement
export const useGTM = () => {
  const trackEvent = (eventData: GTMEvent) => {
    gtmPush(eventData);
  };

  const trackClick = (elementName: string, section?: string) => {
    engageParisEvents.buttonClick(elementName, section || 'Unknown');
  };

  const trackFormInteraction = (formName: string, action: 'start' | 'submit', success?: boolean) => {
    if (action === 'start') {
      engageParisEvents.formStart(formName);
    } else {
      engageParisEvents.formSubmit(formName, success || false);
    }
  };

  return {
    trackEvent,
    trackClick,
    trackFormInteraction,
    events: engageParisEvents
  };
};