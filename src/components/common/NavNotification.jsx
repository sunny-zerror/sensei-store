"use client";

import React, { useEffect, useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import Notifications from "@/utils/data/Notification";

const NavNotification = () => {
  const [notifications, setNotifications] = useState(Notifications);
  const [dismissed, setDismissed] = useState([]);
  const [restoring, setRestoring] = useState(false);

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    setDismissed((prev) => [...prev, id]);
  };

  const dismissAllNotifications = () => {
    setDismissed(Notifications.map((n) => n.id));
    setNotifications([]);
  };

  const restoreNotifications = () => {
    setRestoring(true);
    setNotifications(Notifications);
    setDismissed([]);
    setTimeout(() => setRestoring(false), 10);
  };

  useEffect(() => {
    if (restoring) {
      const timer = setTimeout(() => setRestoring(false), 300);
      return () => clearTimeout(timer);
    }
  }, [restoring]);

  // 👇 Automatically close notifications on scroll past 50px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && notifications.length > 0) {
        dismissAllNotifications();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [notifications]);

  return (
    <div className="nav_notification">
      <div className="nav_notification__container">
        <AnimatePresence>
          {notifications.map((note) => (
            <motion.div
              key={note.id}
              initial={{ y: restoring ? -20 : 0, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.35, 1] }}
              className="glass nav_notification__item"
            >
              <div className="nav_notification__dot" />
              <div className="nav_notification__text">
                <div className="nav_notification__title">
                  <p className="text-xxs">{note.title}</p>
                </div>
                <div className="nav_notification__message">
                  <p className="text-xs">{note.message}</p>
                </div>
              </div>
              <button
                onClick={() => dismissNotification(note.id)}
                className="nav_notification__close"
              >
                <RiCloseLine size={12} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {dismissed.length > 0 && notifications.length < Notifications.length && (
          <motion.button
            onClick={restoreNotifications}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`nav_notification__restore text-xs glass ${
              dismissed.length === 1 ? "nav_notification__restoreSingle" : ""
            }`}
          >
            {dismissed.length === 1 ? (
              <div className="nav_notification__circle_a">
                <p>+{dismissed.length}</p>
              </div>
            ) : (
              <>
                <div className="nav_notification__circle">
                  <p>+</p>
                </div>
                <p className="nav_notification__count">
                  {dismissed.length} Notifications
                </p>
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default NavNotification;
